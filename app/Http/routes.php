<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function () {
    
    //Routes using UserController

    Route::get('/welcome1ab', [
           'uses'=>'UserController@getWelcome1ab',
           'as' => 'welcome1ab',
    ]);

    

    Route::get('/', [ 
           'uses'=>'UserController@getWelcome',
           'as' => 'welcome',       
    ]);

    Route::get('/welcome1a', [
           'uses'=>'UserController@getWelcome1a',
           'as' => 'welcome1a',
    ]);

     Route::get('/welcome1', [
        'uses'=>'UserController@getWelcome1',
           'as' => 'welcome1',
    ]);


    Route::get('/pass_value', [
        'uses'=>'UserController@getPass_value',
       
    ]);




    Route::get('/lvl1', [
        'uses'=>'UserController@getLevel1',
        'as' => 'lvl1',
       
    ]);

    Route::post('/lvl1', [
        'uses'=>'AnswerController@postLvl1',
        'as' => 'postLvl1',
       
    ]);

     
   





    
    Route::post('/welcome1a', [
        'uses'=>'UserController@postRegister',
        'as' => 'register',
    ]);

    Route::post('/welcome1', [
        'uses'=>'UserController@postRegister1',
        'as' => 'register1',
    ]);

    Route::post('/', [
        'uses'=>'UserController@postLogin',
        'as' => 'login',
    ]); 








    //Routes using AnswerController

    Route::get('/welcome2', [
        'uses'=>'UserController@getWelcome2',
       
        
    ]);

    Route::get('/welcome3', [
        'uses'=>'AnswerController@getWelcome3',
        'as' => 'welcome3',
        'middleware' => 'auth',
    ]);

    Route::get('/initialAnswers', [
        'uses'=>'AnswerController@getInitialAnswers',
        'as' => 'getInitialAnswers'
        
    ]); 


    Route::post('/welcome2', [
        'uses'=>'UserController@postAns1',
        'as' => 'postAns1',
    ]);

    Route::post('/welcome3', [
        'uses'=>'AnswerController@postAns2',
        'as' => 'postAns2',
    ]);

    Route::post('/initialAnswers', [
        'uses'=>'AnswerController@postInitialAnswers',
        'as' => 'postInitialAnswers'
    ]);


 
    


    Route::get('/level1a', [
        'uses'=>'AnswerController@getLevel1a',
        'as' => 'level1a',
        'middleware' => 'auth',  
    ]);

    Route::get('/level1b', [
        'uses'=>'AnswerController@getLevel1b',
        'as' => 'level1b',
        'middleware' => 'auth',
    ]);

    Route::get('/level1c', [
        'uses'=>'AnswerController@getLevel1c',
        'as' => 'level1c',
        'middleware' => 'auth',
    ]);

    Route::post('/level1a', [
        'uses'=>'AnswerController@postLevel1a',
        'as' => 'postLevel1a',
    ]);

    Route::post('/level1b', [
        'uses'=>'AnswerController@postLevel1b',
        'as' => 'postLevel1b',
    ]);

    Route::post('/level1c', [
        'uses'=>'AnswerController@postLevel1c',
        'as' => 'postLevel1c',
    ]);

    Route::get('/level5', [
        'uses'=>'AnswerController@getLevel5',
        'as' => 'level5',
        'middleware' => 'auth',
    ]);

    Route::get('/level4', [
        'uses'=>'AnswerController@getLevel4',
        'as' => 'level4',
        'middleware' => 'auth',
    ]);




    Route::get('/level2', [
        'uses'=>'AnswerController@getLevel2',
        'as' => 'level2',
    ]);

    Route::get('/level3', [
        'uses'=>'AnswerController@getLevel3',
        'as' => 'level3',
    ]);

    
    
    






    

});
?>
