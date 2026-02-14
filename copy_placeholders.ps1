$source = "public\images\pizzas\muzzarella.jpg"
$destinations = @(
"public\images\pizzas\anchoas.jpg",
"public\images\pizzas\morrones.jpg",
"public\images\pizzas\jamon_roquefort.jpg",
"public\images\pizzas\brasilera.jpg",
"public\images\pizzas\especial_geminis.jpg",
"public\images\pizzas\palmitos.jpg",
"public\images\pizzas\palmitos_roquefort.jpg",
"public\images\pizzas\provolone.jpg",
"public\images\pizzas\pollo_muzzarella.jpg",
"public\images\pizzas\especial_rellena.jpg",
"public\images\pizzas\vegetariana.jpg",
"public\images\pizzas\sorrentina.jpg",
"public\images\pizzas\rucula_parmesano.jpg",
"public\images\empanadas\caprese.jpg",
"public\images\mila\simple.jpg",
"public\images\mila\cuatro_quesos.jpg",
"public\images\mila\calabresa.jpg",
"public\images\mila\cheddar_bacon.jpg",
"public\images\mila\combo_plato.jpg",
"public\images\hamburguesas\chese_burger.jpg",
"public\images\hamburguesas\chese_bacon.jpg",
"public\images\hamburguesas\burger_geminis.jpg",
"public\images\bondiolas\cebolla_papas.jpg",
"public\images\bondiolas\cebolla_huevo_papas.jpg",
"public\images\bondiolas\cebolla_huevo_jamon.jpg",
"public\images\bondiolas\cheddar_bacon.jpg"
)

foreach ($dest in $destinations) {
    if (-not (Test-Path $dest)) {
        Copy-Item $source $dest -Force
        Write-Host "Copied to $dest"
    } else {
        Write-Host "Exists: $dest"
    }
}
