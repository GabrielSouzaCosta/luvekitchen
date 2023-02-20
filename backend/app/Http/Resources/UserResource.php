<?php

namespace App\Http\Resources;

use App\Models\FavoriteRecipe;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $favorites = FavoriteRecipe::where('user_id', $this->id)
            ->with('recipe')
            ->get();

        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'avatar_img' => $this->avatar_img,
            'favorites' => FavoriteRecipeResource::collection($favorites),
        ];
    }
}
