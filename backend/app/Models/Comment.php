<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'comment',
        'rating',
        'user_id',
        'recipe_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
