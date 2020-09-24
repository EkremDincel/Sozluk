# Bir Topic'e Tiklanirsa
```flask/topic_detail/TOPIC_NAME_ENCODED``` url'ine istek yapilir.

## RESPONSE

```
{
entries: [
    {
        id: 1,
        content: 'Icerik',
        sender: 'Kullanici adi',
        date: 'Tarih GG/AA/YYYY Gun(hafta adi)',
    },

    {
        id: 2,
        content: 'Diger Icerik',
        sender: 'Diger Kullanici adi',
        date: 'Tarih GG/AA/YYYY Gun(hafta adi)',
    },
]
}
```
# Tum Topicleri Alma

### URL

```flask/topic_list```

## Response

```
[
{
    id: 1,
    title: 'baslik',
},
{
    id: 2,
    title: 'baslik',
},
...
]
```

