<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'comment' => $this->comment,
            'rating' => $this->rating,
            'recipe_id' => $this->recipe_id,
            'user_id' => $this->user->id,
            'user_name' => $this->user->name,
            'user_image' => $this->user->avatar_img,
            'created_at' => date('d/m/Y H:i:s', strtotime($this->created_at)),
        ];
    }
}
