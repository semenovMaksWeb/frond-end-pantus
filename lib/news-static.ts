export function NewsStatic() {
  const classNameCol = [
    '.col-xs-1',
    '.col-xs-2',
    '.col-xs-3',
    '.col-xs-4',
    '.col-xs-5',
    '.col-xs-6',
    '.col-xs-7',
    '.col-xs-8',
    '.col-xs-9',
    '.col-xs-10',
    '.col-xs-11',
    '.col-xs-12',
    '.col-md-1',
    '.col-md-2',
    '.col-md-3',
    '.col-md-4',
    '.col-md-5',
    '.col-md-6',
    '.col-md-7',
    '.col-md-8',
    '.col-md-9',
    '.col-md-10',
    '.col-md-11',
    '.col-md-12',
    '.col-sm-1',
    '.col-sm-2',
    '.col-sm-3',
    '.col-sm-4',
    '.col-sm-5',
    '.col-sm-6',
    '.col-sm-7',
    '.col-sm-8',
    '.col-sm-9',
    '.col-sm-10',
    '.col-sm-11',
    '.col-sm-12',
    '.col-lg-1',
    '.col-lg-2',
    '.col-lg-3',
    '.col-lg-4',
    '.col-lg-5',
    '.col-lg-6',
    '.col-lg-7',
    '.col-lg-8',
    '.col-lg-9',
    '.col-lg-10',
    '.col-lg-11',
    '.col-lg-12',
  ].join(',')
  const elemNews = document.querySelectorAll(classNameCol)
  for (let i = 0; i < elemNews.length; i++) {
    elemNews[i].classList.add('col')
  }
  const elemImg = document.querySelectorAll('img')
  for (let i = 0; i < elemImg.length; i++) {
    if (elemImg[i].style.marginLeft) {
      elemImg[i].style.paddingLeft = elemImg[i].style.marginLeft
      elemImg[i].style.marginLeft = ''
    }
    if (elemImg[i].style.marginRight) {
      elemImg[i].style.paddingRight = elemImg[i].style.marginRight
      elemImg[i].style.marginRight = ''
    }
  }
}
