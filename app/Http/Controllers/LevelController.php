<?php

namespace App\Http\Controllers;
use App\Answer;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Authenticable;
use DB;
use App\DateCompare;

class LevelController extends Controller{

   protected $view = 'level';
   protected $indexTimestamp;

   public function checkLevel(){
         

         $id = Auth::user()->user_id;
         $now = time();
         $currentLevel = Answer::where('user_id', $id)->max('level'); 
         $entriesOnLevel = Answer::where('level', $currentLevel)->where('user_id', $id)->count('*');
         if($entriesOnLevel == 5){
            ++$currentLevel;
            if($currentLevel == 6){
                 return redirect()->route('welcome')->with('message', 'Thank you! You have finished the WRAP course.');
            }else{
                 $view = $this->view . $currentLevel;             
                 return redirect()->route($view);
            }
         }
         $maxTimestamp = Answer::where('level', $currentLevel)->where('user_id', $id)->max('timestamp');
         $dateCompare = new DateCompare($now, $maxTimestamp);
         $daysSinceLastLogin = $dateCompare->daysMissed();
         $view = $this->view . $currentLevel; 
         if ($daysSinceLastLogin >= 3){
              Answer::where('level', $currentLevel)->where('user_id', $id)->update(['level' => NULL]);
              return redirect()->route($view)->with('message', 'You did not finish the level within a week.  The level commences today.');    
              
            }else if($daysSinceLastLogin == -1){
              $a = DB::table('answers')->select('answers')->where('level', $currentLevel)->where('user_id', $id)->where('timestamp', $maxTimestamp)->get();
              $answers = unserialize($a[0]->answers);
              session(['answers' => $answers]); 
              return redirect()->route($view);
            }else{
               $minTimestamp = Answer::where('level', $currentLevel)->where('user_id', $id)->min('timestamp');
               $dateCompare = new DateCompare($now, $minTimestamp);
               $daysInLevel = ($dateCompare->daysMissed()) + 1;
               $difference = $daysInLevel - $entriesOnLevel;

               if ($difference >= 3){
                     $count = 0;
                     $daysMissed = 0;
                     $days;
                     $timestampBefore = $minTimestamp; 
                     $timestamps = DB::table('answers')->select('timestamp')->where('level', $currentLevel)->where('user_id', $id)->orderBy('timestamp', 'asc')->get();
                     $allTimestamps = array();
                     foreach($timestamps as $timestamp){
                          $allTimestamps[] = $timestamp->timestamp;
                     }
                     $allTimestamps[] = $now;

                     foreach($allTimestamps as $timestamp){
                          $dateCompare = new DateCompare($timestamp, $timestampBefore);
                          $days = $dateCompare->daysMissed();
                          $timestampBefore = $timestamp;
                           
                          if($days >= 1 && $days < 3){
                              $count += 1;
                              if($count == 1){
                                  $this->indexTimestamp = $timestamp;
                              } 
                              $daysMissed += $days;   
                          }
                          if ($daysMissed >= 3){
                              Answer::where('level', $currentLevel)->where('user_id', $id)->where('timestamp', '<', $this->indexTimestamp)->update(['level' => NULL]);
                          $view = $this->view . $currentLevel; 
                          return redirect()->route($view);
                          }
                         
                     }
               }
           }  
         




}         
         

  

     
   
}   

?>
