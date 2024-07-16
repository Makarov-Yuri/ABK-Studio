
//Код для появлени меню

// Nav BURGER
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-menu');
const headerBurger = document.querySelector('.header__burger');
const closeBtn = document.querySelector('.burger__close');
const writeBtn = document.querySelector('.burger__button');

navBtn.onclick = function () {
    nav.classList.toggle('nav--burger');
    headerBurger.classList.toggle('header__burger_active');
    document.body.classList.toggle('no-scroll');
};

closeBtn.onclick = function () {
    nav.classList.toggle('nav--burger');
    headerBurger.classList.toggle('header__burger_active');
    document.body.classList.toggle('no-scroll');
};
writeBtn.onclick = function () {
    nav.classList.toggle('nav--burger');
    headerBurger.classList.toggle('header__burger_active');
    document.body.classList.toggle('no-scroll');
};





//Код для работы скролла картинок


//Ссылка на кнопку скролла списка проектов влево
let leftButtonToScrollProjects=document.querySelector('.PC_content > img:nth-child(1)');

//Ссылка на кнопку скролла списка проектов вправо
let rightButtonToScrollProjects=document.querySelector('.PC_content > img:nth-child(3)');

//Ссылка на родительский блок со списком проектов
let listOfProjects=document.querySelector('.listOfProjects');

//Ссылка на список проектов
let PC_content_projects=document.querySelector('.PC_content>.projects');

let PC_content=document.querySelector('.PC_content');



//Объявляем функцию для получения количества блоков, которые можно скролить при данной
//ширине - максимальная ширина скролла для данной ширины экрана

getMaxWidthOfScrollPCContentProjects=()=>{

	//Округляем до ближайшего меньшего целого
	let widthOfProjectList=Math.floor((PC_content.clientWidth-200)/200);

	if(widthOfProjectList>=5){

		widthOfProjectList=5;

	}else if(widthOfProjectList==0){

		widthOfProjectList=1;

	}

	return (9-widthOfProjectList)*200;

}


//Объявляем функцию для автоматической настройки ширины блока с проектами
PC_content_projects_setWidth=()=>{

	//console.log(PC_content.clientWidth);

	//Округляем до ближайшего меньшего целого
	let widthOfProjectList=Math.floor((PC_content.clientWidth-200)/200);

	if(widthOfProjectList>=5){

		widthOfProjectList=5;

	}else if(widthOfProjectList==0){

		widthOfProjectList=1;

	}

	PC_content_projects.style.width=(widthOfProjectList*200)+'px';

	console.log(PC_content_projects.style.width+' Ширина установлена');

}


//При загрузке страницы устанавливаем ширину блока со списком проектов
PC_content_projects_setWidth();


//Добавляем слушатель события изменения ширины родительскго блока списка проектов
let listOfProjectsObserverOfWidth = new window.ResizeObserver(entries=>{

	console.log(entries[0].contentRect.width);

	PC_content_projects_setWidth();

});

//Указываем слушателю слушать события родительскго блока списка проектов
listOfProjectsObserverOfWidth.observe(listOfProjects);




//Переменная о том, что сейчас идет скролл
scrollIsPlaying=false;

//Добавления слушателя событий для скролла списка проектов влево
leftButtonToScrollProjects.onclick=()=>{

	if(scrollIsPlaying==false){

		//Указываем, что сейчас происходит скролл
		scrollIsPlaying==true;

		//Разрешаем элементу скролиться
		PC_content_projects.style.overflow='scroll';

		//Зарпещаем любые действия мышью - на элемент нельзя воздействовать
		PC_content_projects.style.pointerEvents='none';

		//Получаем нынешнюю прокрутку
		let basicScrollLeft=PC_content_projects.scrollLeft;

		//Получаем текущую прокрутку, которая дальше будет постоянно обновляться
		let currentScrollLeft=basicScrollLeft;

		//Указываем, сколько будем скроллить за один заход функции
		let deltaWidth=5;

		//Указываем необходимую ширину для скролла элемента на ширину одного блока проекта влево
		let maxScrolledWidth=200;


		setTimeout(function scroll() {

			currentScrollLeft=PC_content_projects.scrollLeft;


			if(

				//Если текущая прокрутка больше той, которая должна быть в конце скролла
				currentScrollLeft>basicScrollLeft-maxScrolledWidth

				//И прокрутка в конце скролла больше или равна нулю, то выполянем скролл
				&&

				basicScrollLeft-maxScrolledWidth>=0


				){

				PC_content_projects.scrollBy(-deltaWidth,0);

				//Вызываем функцию скролла еще раз
				setTimeout(scroll, 0);

				console.log(currentScrollLeft+' Скроллим влево');

			}else{

				PC_content_projects.scrollTo(basicScrollLeft-maxScrolledWidth,0);
				console.log(currentScrollLeft+' Конец скролла влево');

				//Через долю сенкунды выключаем блокиролку нажатия на кнопку скролла
				setTimeout(()=>{

					//Указываем, что скролл закончился
					scrollIsPlaying==false;

				}, 100);

			}

		},0);


		//После скролла запрещаем элементу скроллиться
		PC_content_projects.style.overflow='';

		//Разрешаем элементу реагировать на события мыши
		PC_content_projects.style.pointerEvents='';

	}


  };


//Добавления слушателя событий для скролла списка проектов вправо
rightButtonToScrollProjects.onclick=()=>{

	if(scrollIsPlaying==false){

		//Указываем, что сейчас происходит скролл
		scrollIsPlaying==true;

		//Разрешаем элементу скролиться
		PC_content_projects.style.overflow='scroll';

		//Зарпещаем любые действия мышью - на элемент нельзя воздействовать
		PC_content_projects.style.pointerEvents='none';

		//Получаем нынешнюю прокрутку
		let basicScrollLeft=PC_content_projects.scrollLeft;

		//Получаем текущую прокрутку, которая дальше будет постоянно обновляться
		let currentScrollLeft=basicScrollLeft;

		//Указываем, сколько будем скроллить за один заход функции
		let deltaWidth=5;

		//Указываем необходимую ширину для скролла элемента на ширину одного блока проекта влево
		let maxScrolledWidth=200;


		setTimeout(function scroll() {

			currentScrollLeft=PC_content_projects.scrollLeft;

			//Если текущая прокрутка меньше той, которая должна быть в конце скролла
			if(

				currentScrollLeft<basicScrollLeft+maxScrolledWidth

				//И прокрутка в конце скролла больше или равна максимальному значению, 
				//то выполянем скролл
				&&

					basicScrollLeft+maxScrolledWidth<=getMaxWidthOfScrollPCContentProjects()

				){

				PC_content_projects.scrollBy(deltaWidth,0);

				//Вызываем функцию скролла еще раз
				setTimeout(scroll, 0);

				console.log(currentScrollLeft+' Скроллим вправо');

			}else{

				PC_content_projects.scrollTo(basicScrollLeft+maxScrolledWidth,0);
				console.log(currentScrollLeft+' Конец скролла вправо');

				//Через долю сенкунды выключаем блокиролку нажатия на кнопку скролла
				setTimeout(()=>{

					//Указываем, что скролл закончился
					scrollIsPlaying==false;

				}, 100);
			}

		},0);

		//После скролла запрещаем элементу скроллиться
		PC_content_projects.style.overflow='';

		//Разрешаем элементу реагировать на события мыши
		PC_content_projects.style.pointerEvents='';

	}

 };


//---------------------------------------------------------------------------------

//Скролл для мобильной версии



//Ссылка на кнопку скролла списка проектов вниз, мобильная версия
let bottomButtonToScrollProjects=document.querySelector('.Mobile_content>button');

//Ссылка на список проектов в мобильном отображении
let Mobile_content_projects=document.querySelector('.Mobile_content>.projects');



//Добавления слушателя событий для скролла списка проектов вправо
bottomButtonToScrollProjects.onclick=()=>{

	if(scrollIsPlaying==false){

		//Указываем, что сейчас происходит скролл
		scrollIsPlaying==true;

		//Разрешаем элементу скролиться
		Mobile_content_projects.style.overflow='scroll';

		//Зарпещаем любые действия мышью - на элемент нельзя воздействовать
		Mobile_content_projects.style.pointerEvents='none';

		//Получаем нынешнюю прокрутку
		let basicScrollTop=Mobile_content_projects.scrollTop;

		//Получаем текущую прокрутку, которая дальше будет постоянно обновляться
		let currentScrollTop=basicScrollTop;

		//Указываем, сколько будем скроллить за один заход функции
		let deltaHeight=5;

		//Указываем необходимую ширину для скролла элемента на ширину одного блока проекта влево
		let maxScrolledHeight=161;

		setTimeout(function scroll() {

			currentScrollTop=Mobile_content_projects.scrollTop;

			//Если текущая прокрутка меньше той, которая должна быть в конце скролла
			if(

				currentScrollTop<basicScrollTop+maxScrolledHeight

				//И прокрутка в конце скролла больше или равна максимальному значению, 
				//то выполянем скролл
				&&

					basicScrollTop+maxScrolledHeight<=644

				){

				Mobile_content_projects.scrollBy(0,deltaHeight);

				//Вызываем функцию скролла еще раз
				setTimeout(scroll, 0);

				console.log(currentScrollTop+' Скроллим вниз');

			}else{

				Mobile_content_projects.scrollTo(0,basicScrollTop+maxScrolledHeight);
				console.log(currentScrollTop+' Конец скролла вниз');

				//Через долю сенкунды выключаем блокиролку нажатия на кнопку скролла
				setTimeout(()=>{

					//Указываем, что скролл закончился
					scrollIsPlaying==false;

				}, 100);
			}

		},0);


		//После скролла запрещаем элементу скроллиться
		Mobile_content_projects.style.overflow='';

		//Разрешаем элементу реагировать на события мыши
		Mobile_content_projects.style.pointerEvents='';

	}

 };















