<?php

namespace App\Http\Controllers;

use App\Http\Resources\FavoriteRecipeResource;
use App\Models\FavoriteRecipe;
use App\Models\Recipe;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FavoriteController extends Controller
{
    public function index (Request $request) {
        $favorites = FavoriteRecipe::where('user_id', auth()->user()->id)
            ->with('recipe')
            ->get();
        
        return response()
            ->json([
                FavoriteRecipeResource::collection($favorites)
            ]);
    }

    public function store (Request $request) {
        try {
            if (!Recipe::find($request->recipe_id)) {
                $recipe = Recipe::create([
                    'id' => $request->recipe_id,
                    'name' => $request->name,
                    'image_url' => $request->image_url,
                ]);
            };

            $is_favorite = DB::table('favorite_recipes')
                ->where('user_id', auth()->user()->id)
                ->where('recipe_id', $request->recipe_id)
                ->first();
            
            // If is not in favorites, add to list
            if (!$is_favorite) {
                $favorite = FavoriteRecipe::create([
                    'user_id' => $request->user()->id,
                    'recipe_id' => $request->recipe_id,
                ]);

                return response()
                    ->json([
                        'success' => true,
                        'data' => new FavoriteRecipeResource($favorite),
                    ]);
            // If already is a favorite recipe, delete it
            } else {
                DB::table('favorite_recipes')
                    ->where('user_id', auth()->user()->id)
                    ->where('recipe_id', $request->recipe_id)
                    ->delete();
                return response()
                    ->json([
                        'success' => true,
                        'data' => 'Recipe removed from favorites',
                    ]);
            }

        }
        catch(\Throwable $err) {
            return response()->json([
                'success' => false,
                'message' => $err->getMessage()
            ], 500);
        }
    }
}
