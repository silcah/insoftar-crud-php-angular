<?php

use Illuminate\Http\Request;

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

Route::get('/usuarios/{correo?}', '\App\Http\Controllers\UsuarioController@index');
Route::post('/usuarios', '\App\Http\Controllers\UsuarioController@store');
Route::put('/usuarios/{usuario}', '\App\Http\Controllers\UsuarioController@update');

