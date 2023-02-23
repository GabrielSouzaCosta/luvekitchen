<?php

use App\Http\Controllers\Auth\Api\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FavoriteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('auth')->group(function() {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']); 
    Route::post('register', [AuthController::class, 'register']); 
});

Route::middleware('auth:sanctum')->group(function() {
    Route::get('auth/user', [AuthController::class, 'user']);
    Route::get('auth/user/favorites', [FavoriteController::class, 'index']);
    Route::post('add-favorite', [FavoriteController::class, 'store']);
    Route::post("recipe/add-comment", [CommentController::class, 'store']);
});

Route::get("recipe/comments", [CommentController::class, 'index']);
