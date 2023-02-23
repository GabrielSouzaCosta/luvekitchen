<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'image_url'
    ];

    public $incrementing = false;

    public function comments() 
    {
        return $this->hasMany(Comment::class);
    }
}
