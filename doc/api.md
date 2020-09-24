# API Dökümanları

Sayfa: Her sayfa 10 entry içerir. n'inci sayfa `(n-1)*10`'uncu entry'den ``n*10``'uncu entry'e kadarki kısmı içerir. ``n*10``'inci entry dahil değildir.

## Bir konunun n. sayfasındaki erişmek

İstek yöntemi: ``GET``
Endpoint: ``/topic/<topic_name>/<n>``

Örnek cevap:
````json
[
	{
		"user": "ahmet",
		"date": "24.09.2020 14:52",
		"content": "Merhaba"
	},
	{
		"user": "ali",
		"date": "24.09.2020 14:52",
		"content": "Merhaba"
	},
	{
		"user": "ayşe",
		"date": "24.09.2020 14:52",
		"content": "Merhaba"
	},
	{
		"user": "kerem",
		"date": "24.09.2020 14:52",
		"content": "Merhaba"
	}
	{
		"user": "menemen",
		"date": "24.09.2020 14:52",
		"content": "Merhaba"
	},
	{
		"user": "köfte",
		"date": "24.09.2020 14:52",
		"content": "Merhaba"
	},
	{
		"user": "kavunbence",
		"date": "24.09.2020 14:52",
		"content": "Merhaba"
	},
	{
		"user": "karpuz",
		"date": "24.09.2020 14:52",
		"content": "Merhaba"
	}
	{
		"user": "sıla",
		"date": "24.09.2020 14:52",
		"content": "Merhaba"
	},
	{
		"user": "kargocu",
		"date": "24.09.2020 14:52",
		"content": "Merhaba"
	}
]
````

Alanların açıklaması:

* user: entry'nin yazarı
* date: entry'nin yazıldığı tarih. Tarih string formatında olacağı için ilerde değişebilir, üzerinde işleme yapılmadan ham kullanılması daha doğru olur.
* content: entry'nin içeriği

