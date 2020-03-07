<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/survey', function () {
    return view('survey');
});

Route::get('/survey-structure', function () {
    return [
        'survey' => [
            'title'             => 'Global Worming Survey',
            'numberOfQuestions' => 4,
            'pages'             => [
                [
                    'id'            => 8,
                    'answer'        => [],
                    'placeholder'   => "your answer",
                    'title'         => 'What are the worlds most recent and effective issues?',
                    'componentName' => "multi-select-question",
                    'options'       => [
                        [
                            'id'    => 1,
                            'title' => 'Global Worming'
                        ],
                        [
                            'id'    => 2,
                            'title' => 'Diseases'
                        ],
                        [
                            'id'    => 3,
                            'title' => 'technology'
                        ],
                        [
                            'id'    => 4,
                            'title' => 'Industry and its effects on environment'
                        ]
                    ],
                    'is_question'   => true,
                ],
                [
                    'id'            => 9,
                    'answer'        => '',
                    'placeholder'   => "your answer",
                    'title'         => 'How much did the water level increased during the past decade?',
                    'componentName' => "single-select-question",
                    'options'       => [
                        [
                            'id'    => 1,
                            'title' => '10%'
                        ],
                        [
                            'id'    => 2,
                            'title' => '20%'
                        ],
                        [
                            'id'    => 3,
                            'title' => '30%'
                        ],
                        [
                            'id'    => 4,
                            'title' => '40%'
                        ]
                    ],
                    'is_question'   => true,
                ],
                [
                    'id'            => 10,
                    'answer'        => '',
                    'placeholder'   => "your answer",
                    'title'         => "Explain in your own words what Global Worming is?",
                    'componentName' => "multi-line-text-question",
                    'is_question'   => true,
                ],
                [
                    'id'            => 11,
                    'answer'        => '',
                    'placeholder'   => "your answer",
                    'title'         => 'Is Global Worming a bad thing?',
                    'componentName' => "text-question",
                    'is_question'   => true,
                ]
            ]
        ]
    ];
});
