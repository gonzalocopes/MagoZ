# Script para copiar imágenes de Pizzería Bonanza a Pizzería Geminis
# Reutilizando imágenes existentes para productos similares

Write-Host "Copiando imágenes de Pizzería Bonanza a Pizzería Geminis..." -ForegroundColor Green

# === PIZZAS ===
Write-Host "`nCopiando pizzas..." -ForegroundColor Yellow

# Mapeo de imágenes de pizzas
$pizzaMappings = @{
    "muzza_real.png" = "muzzarella.jpg"
    "fugazzeta_real.jpg" = "fugazzetta_rellena.jpg"
    "fugazzeta_rellena_real.png" = "fugazzetta_jamon.jpg"
    "fuga.jpeg" = "fugazza.jpg"
    "calabresa_real.png" = "calabresa.jpg"
    "muzza_huevo_real.png" = "huevo.jpg"
    "pizza-napo.png" = "napolitana.jpg"
    "napoconjamon.jpg" = "napolitana_jamon.jpg"
    "roquefort.jpg" = "roquefort.jpg"
    "Pizza-Jamon.png" = "jamon.jpg"
    "cuatroquesos.png" = "cuatro_quesos.jpg"
    "rucula_jamon_parmesano.jpg" = "rucula_jamon_crudo.jpg"
    "panceta_huevo_real.png" = "panceta_huevo.jpg"
    "primavera.png" = "primavera.jpg"
    "verduras.avif" = "verdura.jpg"
    "jamon_morron_real.png" = "jamon_morrones.jpg"
}

foreach ($source in $pizzaMappings.Keys) {
    $dest = $pizzaMappings[$source]
    if (Test-Path "public\images\pizzas\$source") {
        Copy-Item "public\images\pizzas\$source" "public\images\pizzas\$dest" -Force
        Write-Host "  ✓ $source -> $dest" -ForegroundColor Green
    }
}

# === EMPANADAS ===
Write-Host "`nCopiando empanadas..." -ForegroundColor Yellow

$empanadaMappings = @{
    "empanadacarne.png" = "carne.jpg"
    "empanadapollo.jpg" = "pollo.jpg"
    "empanada-jyq.png" = "jamon_queso.jpg"
    "empanada_cebolla_queso.jpg" = "queso_cebolla.jpg"
    "empanada_humita.jpg" = "humita.jpg"
    "roqu.jpg" = "roquefort.jpg"
    "verdura.jpg" = "verdura.jpg"
    "empanada_calabresa.jpg" = "calabresa.jpg"
    "doce.jpg" = "docena.jpg"
    "media.png" = "media_docena.jpg"
}

foreach ($source in $empanadaMappings.Keys) {
    $dest = $empanadaMappings[$source]
    if (Test-Path "public\images\empanadas\$source") {
        Copy-Item "public\images\empanadas\$source" "public\images\empanadas\$dest" -Force
        Write-Host "  ✓ $source -> $dest" -ForegroundColor Green
    }
}

# === CALZONES ===
Write-Host "`nCopiando calzones..." -ForegroundColor Yellow

if (Test-Path "public\images\pizzas\calzones.png") {
    Copy-Item "public\images\pizzas\calzones.png" "public\images\calzones\napolitano.jpg" -Force
    Copy-Item "public\images\pizzas\calzones.png" "public\images\calzones\calabres.jpg" -Force
    Copy-Item "public\images\pizzas\calzones.png" "public\images\calzones\roquefort.jpg" -Force
    Write-Host "  ✓ Calzones copiados" -ForegroundColor Green
}

if (Test-Path "public\images\pizzas\faina.jpg") {
    Copy-Item "public\images\pizzas\faina.jpg" "public\images\calzones\faina.jpg" -Force
    Copy-Item "public\images\pizzas\faina.jpg" "public\images\calzones\faina_verdeo.jpg" -Force
    Write-Host "  ✓ Fainá copiado" -ForegroundColor Green
}

Write-Host "`n✅ Proceso completado!" -ForegroundColor Green
Write-Host "Imágenes copiadas exitosamente de Pizzería Bonanza a Pizzería Geminis" -ForegroundColor Cyan
