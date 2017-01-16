<?php

namespace App;

class DateCompare{

     protected $currentTime;
     protected $lastTime;

     public function __construct($ct, $lt){
           $this->currentTime = $ct;
           $this->lastTime = $lt;
     }

     public function daysMissed(){
          $currentDay=date("dmy",$this->currentTime);
		  //same day
          if ($currentDay==date("dmy",$this->lastTime)){
	           $result = -1;
                   return $result;
	           exit;
	  }       //next day
          if ($currentDay==date("dmy",strtotime("+1 day",$this->lastTime))){	
		   $result = 0;
                   return $result;
	           exit;
	  }       //Missed 1 day
          if ($currentDay==date("dmy",strtotime("+2 day",$this->lastTime))){	
	           $result = 1;
                   return $result;
	           exit;
	  }       //Missed 2 days 
          if ($currentDay==date("dmy",strtotime("+3 day",$this->lastTime))){	
	           $result = 2;
                   return $result;
	           exit; 
          }if ($currentDay==date("dmy",strtotime("+4 day",$this->lastTime))){	
	           $result = 3;
                   return $result;
	           exit; 
          }if ($currentDay==date("dmy",strtotime("+5 day",$this->lastTime))){	
	           $result = 4;
                   return $result;
	           exit; 
          }if ($currentDay==date("dmy",strtotime("+6 day",$this->lastTime))){	
	           $result = 5;
                   return $result;
	           exit; 
          }if ($currentDay==date("dmy",strtotime("+7 day",$this->lastTime))){	
	           $result = 6;
                   return $result;
	           exit; 
          }else{  //more then 7 days missed
	          $result = 8;
	          //Today will be his first day
	          return $result;
	          exit;
	  }
    }
}  
?>   
