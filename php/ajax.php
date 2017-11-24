<?php
header("Access-Control-Allow-Origin: *");
echo ("start");
$mailmessage = 'Внимание! Заказ с сайта!'.PHP_EOL.
   "Имя:".          ($_GET["name"])." ".PHP_EOL.
   "Телефон".       ($_GET["tel"])." ".PHP_EOL.
   "Улица".         ($_GET["street"])." ".PHP_EOL.
   "Дом".           ($_GET["house"])." ".PHP_EOL.
   "Корпус".        ($_GET["korpus"])." ".PHP_EOL.
   "Этаж".          ($_GET["flood"])." ".PHP_EOL.
   "Квартира".      ($_GET["flat"])." ".PHP_EOL.
   "Комментарий".   ($_GET["comment"])." ".PHP_EOL.
   "Нужна ли сдача".($_GET["pay"])." ".PHP_EOL.
   "Оплата картой". ($_GET["pay"])." ".PHP_EOL.
   "Не перезв.".    ($_GET["norecall"]);
   
   echo($mailmessage);
   mail("mischenko.m@mail.ru","Заказ с сайта",$mailmessage);

//mail('mischenko.m@mail.ru','Заказ с сайта','','');
?>
