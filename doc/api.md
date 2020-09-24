# API Dökümanları

Sayfa: Her sayfa 10 entry içerir. n'inci sayfa `n*10`'uncu entry'den ``(n+1)*10``'uncu entry'e kadarki kısmı içerir. ``(n+1)*10``'inci entry dahil değildir.

## Bir konunun n. sayfasındaki erişmek

İstek yöntemi: ``GET``
Endpoint: ``/topic/<topic_name>/``
