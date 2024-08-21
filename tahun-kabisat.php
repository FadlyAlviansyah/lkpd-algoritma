<?php
  for ($tahun = 1600; $tahun <= 2024; $tahun += 4)
  {
    if ($tahun % 400 == 0) {
      echo $tahun . " adalah tahun kabisat" . PHP_EOL;
    } elseif ($tahun % 100 == 0) {
      echo $tahun . " bukan tahun kabisat" . PHP_EOL;
    } elseif ($tahun % 4 == 0) {
      echo $tahun . " adalah tahun kabisat" . PHP_EOL;
    } else {
      echo $tahun . " bukan tahun kabisat" . PHP_EOL;
    }
  }