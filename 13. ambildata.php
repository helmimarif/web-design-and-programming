<?php
//koneksi ke server
mysql_connect("localhost","root","");
//deklarasi database yang dipakai dan nama database harus sesuai
mysql_select_db("pw_ajax_203200127");
$nip = $_GET['q'];
if($nip){
    $query = mysql_query("select alamat from tabeldatakaryawan where nip=$nip");
    while($d = mysql_fetch+array($query)){
        echo $d['alamat'];
    }
}
?>
