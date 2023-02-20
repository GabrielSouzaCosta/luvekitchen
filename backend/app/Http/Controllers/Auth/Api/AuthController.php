<?php

namespace App\Http\Controllers\Auth\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\FavoriteRecipeResource;
use App\Http\Resources\UserResource;
use App\Models\FavoriteRecipe;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request) {
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'gender' => $request->gender,
                'avatar_img' => $request->avatar_img,
            ]);

            return response()
                ->json([
                    'status' => true,
                    'token' => $user->createToken($user->email)->plainTextToken
                ]);
        }
        catch (\Throwable $err) {
            return response()->json([
                'status' => false,
                'message' => $err->getMessage()
            ], 500);
        }
    }

    public function login(LoginRequest $request) {
        try {
            if (!Auth::attempt($request->only(['email', 'password']))) {
                return response()
                    ->json([
                        'status' => false,
                        'message' => 'Email or password is incorrect'
                    ], 401);
            }

            $user = User::where('email', $request->email)->first();
            return response()
                ->json([
                    'status' => true,
                    'token' => $user->createToken($user->email)->plainTextToken
                ], 200);
        }
        catch (\Throwable $err) {
            return response()->json([
                'status' => false,
                'message' => $err->getMessage()
            ], 500);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
    
        $request->session()->invalidate();
    
        $request->session()->regenerateToken();
    
        return response([], 204);
    }

    public function user(Request $request)
    {
        $user = User::findOrFail(Auth::id());
        return new UserResource($user);
    }
}
