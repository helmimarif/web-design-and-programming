<?php
mysql_connect("localhost","root","");
mysql_select_db("pw_ajax_203200127");

$q = strtolower($_GET["q"]);
if (!$q) return;

$sql = mysql_query("select namabarang from tbbarang where namabarang LIKE '%$q%'");
while($r = mysql_fetch_array($sql)) {
    $nama_barang = $r['namabarang'];
    echo "$nama_barang \n";
}
?>
