$button = $("#gomb");

$button.on("click", function(event){
    event.preventDefault();
    $nev = $("#nevSelect");
    $model = $("#modelSelect");

    console.log($nev);

    if ($nev != "" && $model != "") console.log("asd");
})