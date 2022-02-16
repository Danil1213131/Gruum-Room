<header class="header">
            <div class="header-logo">
     
                <img src="img/1.png" alt="" srcset="" class="header-img">
            </div>
            <div class="header-content">
                <a href="/">Главная</a>
                <?php 
                if($_SESSION["user"]==16){
                ?>
                <a href="#">Админ панель</a>
                <?php 
                }
            if($_SESSION["user"]){
?>
<a href="/PersonalAccount.php">Личный кабинет</a>
<?php
            }
            ?>
                
            </div>
            <div class="header-botton">
            <?php 
            if($_SESSION["user"]){
?>
<a class="bottons" href="php/exit.php" >Выход</a>
<?php
            }else{
            ?>
            <a class="bottons" href="/atoruzonion.php" >Вход</a>
            <a class="bottons"  href="/regustr.php">Регистрация</a>
            <?php 
            }
            ?>
            </div>
</header>