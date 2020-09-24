# API Dökümanları

Sayfa: Her sayfa 10 entry içerir. n'inci sayfa `(n-1)*10`'uncu entry'den ``n*10``'uncu entry'e kadarki kısmı içerir. ``n*10``'inci entry dahil değildir.

## `topic_name` konusunun ``n``. sayfasındaki erişmek

**İstek yöntemi:** ``GET``
**Endpoint:** ``/topic/<topic_name>/<n>``

**Şartlar:**
* `n` > 0

**İstisnalar:**
* `n`, konuda bulunan sayfa sayısını aşıyorsa `[]` ile cevap verilir.

Örnek cevap:
````js
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

* ``user``: entry'nin yazarı
* ``date``: entry'nin yazıldığı tarih. Tarih string formatında olacağı için ilerde değişebilir, üzerinde işleme yapılmadan ham kullanılması daha doğru olur.
* ``content``: entry'nin içeriği

---

## `topic_name` konusunun ``n``. entrysinden başlayarak `k` tane entry istemek

**İstek yöntemi:** ``POST``
**Endpoint:** ``/topic/<topic_name>``

**Şartlar:**
* `n` => 0
* 10 => `k` > 0 

**İstisnalar:**
* `n`, konuda bulunan entry sayısını aşıyorsa `[]` ile cevap verilir.

**İstek formatı:**
````js
[n, k]
````

Örnek istek:
````js
[0, 2]
````

Yukarıdaki örnek istek konudaki ilk 2 entry'i alir:
````js
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
	}
]
````

