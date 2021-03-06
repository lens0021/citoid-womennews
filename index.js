let cite = '';

const raw1 = document
  .querySelector('#user-container header section .info-text')
  .innerText.split('\n');

const author = raw1[0];
const date = raw1[1].match(/(\d{4}\.\d{2}\.\d{2})/)[1].replace(/\./g, '-');
const title = document
  .querySelector('.article-head-title')
  .innerText.replace('|', '{{!}}');
const url = window.location.href;
const newspaper = '여성신문';

const output = `<ref>{{뉴스 인용
  | url = ${url}
  | title = ${title}
  | date = ${date}
  | newspaper = ${newspaper}
  | author = ${author}
}}</ref>`;

const $output = document.createElement('textarea');
$output.innerHTML = output;
$output.setAttribute('rows', 8);
document.body.append($output);
$output.onclick = (e) => $output.select();
$output.select();
