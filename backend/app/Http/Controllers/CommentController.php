<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    public function index (Request $request) {
        $comments = Comment::where('recipe_id', $request->recipe_id)
            ->with('user')
            ->get();
        
        return response()
            ->json(
                CommentResource::collection($comments)
            );
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

            $comment = Comment::create([
                'comment' => $request->comment,
                'rating' => $request->rating,
                'user_id' => auth()->user()->id,
                'recipe_id' => $request->recipe_id,
            ]);

            return response()
                ->json([
                    new CommentResource($comment)
                ]);
        }
        catch(\Throwable $err) {
            return response()->json([
                'success' => false,
                'message' => $err->getMessage()
            ], 500);
        }
    }
}
