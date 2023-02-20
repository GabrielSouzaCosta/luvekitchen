<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class RegisterRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:8',
        ];
    }
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'message' => 'Error at registering user.',
            'data' => $validator->errors()
        ]));
    }

    public function messages() 
    {
        return [
            'name.required' => "It's necessary a name.",
            'email.required' => "It's necessary a email.",
            'email.unique' => 'This email is already in use.',
            'password.required' => "It's necessary a password.",
            'password.min' => 'Your password must contain at least 8 characters'
        ];
    }
}
