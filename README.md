# Задание для интервью React-разработчика

Необходимо разработать небольшое приложение с несколькими страничками, копирующими часть функционала vk.

## Страница пользователя

[Ссылка на макет странички](https://www.dropbox.com/s/pfmhs9nge7mz7zy/main1.png?dl=0)

### Описание API:

### Получение текущего пользователя: 

| Метод| URL|
| ------------- |:-------------:| 
| GET | https://5d610fd7c2ca490014b27388.mockapi.io/api/users |

### Получение списка друзей

| Метод| URL|
| ------------- |:-------------:|
| GET | https://5d610fd7c2ca490014b27388.mockapi.io/api/users/<ID пользователя>/friends |


### Полученние списка подарков

| Метод| URL|
| ------------- |:-------------:|
| GET | https://5c7a501d78a13a0014a09277.mockapi.io/api/users/<ID пользователя>/gifts |

## Страница профиля

[Ссылка на макет странички](https://www.dropbox.com/s/vv1wqru2n78kob1/profile1.png?dl=0)

### Описание API:

### Обновление данных текущего пользователя: 

| Метод| URL|
| ------------- |:-------------:|
| PUT | https://5c7a501d78a13a0014a09277.mockapi.io/api/users/<ID пользователя> |

## Страница подарков

[Ссылка на макет странички](https://www.dropbox.com/s/rjyexxfz9dx8zmt/gifts1.png?dl=0)

## Дропдаун пользователя

[Ссылка на макет](https://www.dropbox.com/s/hkkc41o1zsvieaz/dropdown1.png?dl=0)

## Страница друга

[Ссылка на макет1](https://www.dropbox.com/s/o1ih86tol5olsq0/friend1.png?dl=0)
[Ссылка на макет2](https://www.dropbox.com/s/sr6ctuzswptq5su/friend2.png?dl=0)

### Описание API:

### Удаление из друзей: 

| Метод| URL|
| ------------- |:-------------:|
| DELETE | https://5c7a501d78a13a0014a09277.mockapi.io/api/users/<ID пользователя>/friends |

