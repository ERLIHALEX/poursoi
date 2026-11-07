const MAX_MESSENGER_URL = "https://max.ru/poursoi";
const SALON_PHONE_DISPLAY = "+7 (951) 481-49-81";
const SALON_PHONE_DIGITS = "+79514814981";

const SPA_PROGRAMS = [{"id":"her-1","cat":"for-her","catName":"Для неё","giftTag":"Небольшой знак внимания","title":"«Абсолютное восстановление»","desc":"Когда хочется выдохнуть, снять напряжение и восстановить силы.","dur":"60 минут","price":"3 500 ₽","img":"her1.jpg","steps":["Аромознакомство и индивидуальный выбор эфирного масла","Массаж всего тела на выбор: глубоко расслабляющий или тонизирующий — 60 минут","Завершающая церемония чаепития"],"note":""},{"id":"her-2","cat":"for-her","catName":"Для неё","giftTag":"Подарок человеку, которому хочется отдохнуть","title":"«Тайский Баланс»","desc":"Мягкий ритуал для тех, кто хочет отпустить повседневные заботы и уделить время себе.","dur":"60 минут","price":"4 000 ₽","img":"her2.jpg","steps":["Аромознакомство и индивидуальный выбор эфирного масла","Тайский релакс-массаж тела — 60 минут","Церемония чаепития"],"note":""},{"id":"her-3","cat":"for-her","catName":"Для неё","giftTag":"","title":"Спа-программа «Дух Леса»","desc":"Ароматы хвои и кедра, тепло полотенец и целая череда приятных ощущений — для глубокого отдыха.","dur":"90 минут","price":"5 000 ₽","img":"her3.jpg","steps":["Аромознакомство и индивидуальный выбор эфирного масла","Приветственный ритуал с горячими полотенцами и масляный массаж стоп","Гармонизирующий массаж тела — 60 минут","Хвойный пилинг-массаж тела скорлупой кедрового ореха","Освежающий душ","Церемония чаепития"],"note":""},{"id":"her-4","cat":"for-her","catName":"Для неё","giftTag":"","title":"Спа программа «Кокон Стройности»","desc":"Бодрящее «холодное» обертывание с ярким ароматом мяты и букета эфирных масел за короткий срок выведут лишнюю жидкость и токсины, подтянут рельеф кожи.","dur":"120 минут","price":"5 500 ₽","img":"her4.jpg","steps":["Первое погружение в отдых: аромознакомство и индивидуальный выбор эфирного масла","Пилинг тела для сияющей и гладкой кожи","Моделирующий массаж тела с маслом «Лифтинг» 60 минут","Бандажное обёртывание тела","Завершающий уход — нанесение сыворотки после обертывания для закрепления результата","Церемония чаепития"],"note":"Результат после первого посещения. Рекомендуем курс из 5 процедур для лучшего эффекта."},{"id":"her-5","cat":"for-her","catName":"Для неё","giftTag":"","title":"Спа-программа «Молодильное яблочко»","desc":"Помните ощущение после настоящего выходного, когда хочется улыбнуться своему отражению? Два часа тепла, нежных прикосновений и ухода за кожей. Можно закрыть глаза, забыть о расписании и просто наслаждаться.","dur":"120 минут","price":"5 000 ₽","img":"her5.jpg","steps":["Тёплое начало — приветственный ритуал с горячими полотенцами","Обновление кожи — пилинг-массаж всего тела для ощущения гладкости","Час без спешки — расслабляющий массаж тела, 60 минут","Нежное укутывание — маска для ухода за кожей тела","Последний штрих — тонизирующий уход за телом","Сладкое послевкусие отдыха — церемония чаепития"],"note":"После ритуала кожа приятна на ощупь, а вы чувствуете, что наконец уделили время себе."},{"id":"her-6","cat":"for-her","catName":"Для неё","giftTag":"","title":"Спа-программа «Райский остров»","desc":"Ваш маленький отпуск среди повседневных забот. Нежный аромат мякоти кокоса, мягкое тепло кокосового масла и расслабляющие прикосновения — два часа, чтобы замедлиться и насладиться заботой о себе.","dur":"120 минут","price":"5 000 ₽","img":"her6.jpg","steps":["Тёплое начало — приветственный ритуал с горячими полотенцами подарит ощущение уюта.","Обновление кожи — ароматное кокосовое скрабирование всего тела подарит коже мягкость и гладкость.","Расслабляющий массаж тела, 60 минут — время отпустить напряжение и погрузиться в отдых.","Нежное укутывание — питательная маска для бережного ухода за кожей тела.","Расслабляющий массаж головы, 20 минут — ещё немного покоя и удовольствия.","Сладкое послевкусие отдыха — церемония чаепития завершит ваше путешествие на «Райский остров»."],"note":"Позвольте себе маленький отпуск — запишитесь на «Райский остров»."},{"id":"her-7","cat":"for-her","catName":"Для неё","giftTag":"","title":"Спа-программа «Сахасрара — 7-я чакра»","desc":"Позвольте себе замедлиться и посвятить два часа только себе. Тепло, нежные ароматы и заботливые прикосновения помогут отпустить напряжение и насладиться отдыхом.","dur":"120 минут","price":"6 000 ₽","img":"her7.jpg","steps":["Аромазнакомство — выберите эфирное масло, аромат которого созвучен вашему настроению.","Тёплое начало — приветственный ритуал с горячими полотенцами подарит ощущение уюта.","Обновление кожи — сахарный пилинг-массаж всего тела сделает кожу мягкой и гладкой.","Расслабляющий массаж тела, 60 минут — время для отдыха и освобождения от повседневного напряжения.","Нежное укутывание — питательная маска подарит коже бережный уход.","Расслабляющий массаж головы, 20 минут — удовольствие, которому хочется отдаться без остатка.","Сладкое послевкусие отдыха — церемония чаепития завершит ваш ритуал заботы о себе."],"note":"Подарите себе время, в котором никуда не нужно спешить."},{"id":"her-8","cat":"for-her","catName":"Для неё","giftTag":"","title":"НЕЙРО-спа «ГОЛУБОЙ ЛОТОС»","desc":"Для тех, кто устал быть в постоянном напряжении и хочет наконец выдохнуть. Ароматы, неспешные прикосновения и уход за телом помогают отвлечься от потока мыслей, почувствовать спокойствие и уделить внимание коже. Два часа, в которые можно никуда не торопиться.","dur":"120 минут","price":"6 000 ₽","img":"her8.jpg","steps":["Глубокое отшелушивание для ощущения гладкой кожи","Увлажняющая маска для тела с цитоплазмой гигантских красных водорослей","Расслабляющий массаж тела с уходовым маслом-баттером — 60 минут","Расслабляющий массаж головы — 20 минут","Неспешная церемония чаепития"],"note":""},{"id":"her-9","cat":"for-her","catName":"Для неё","giftTag":"","title":"Женская перезагрузка «9 прикосновений»","desc":"Время замедлиться и переключить внимание на себя. Программа сочетает массаж тела, стоп, лица и головы, чтобы отдых ощущался с первых минут до завершающего чаепития.","dur":"120 минут","price":"7 000 ₽","img":"her9.jpg","steps":["Аромознакомство и индивидуальный выбор эфирного масла","Тайский релакс-массаж тела — 60 минут","Рефлекторный и фрикционный массаж стоп","Техника «Резет» — мягкая работа с напряжением","Массаж лица и зоны декольте — расслабление и лифтинг-эффект","Глубинный массаж ушей — снятие напряжения","Расслабляющий массаж головы","Завершающая церемония чаепития"],"note":"«Женская перезагрузка» — возможность выдохнуть и вновь почувствовать лёгкость."},{"id":"her-10","cat":"for-her","catName":"Для неё","giftTag":"Для любителей комплексного ухода","title":"«СПА Выходной»","desc":"Для тех, кому хочется поставить дела на паузу и провести 2,5 часа в заботе о себе. Здесь не нужно выбирать между уходом за лицом и отдыхом для тела: в программе с вами работают 2 мастера: косметолог и массажист.","dur":"180 минут","price":"6 800 ₽","img":"her10.jpg","steps":["Первое погружение в отдых: аромознакомство и индивидуальный выбор эфирного масла","Время для сияния — уход от косметолога и массаж лица, 60 минут","Отдых для всего тела — массаж тела 60 минут","Завершающий уход — бандажное обёртывание для тела","Церемония чаепития"],"note":""},{"id":"her-11","cat":"for-her","catName":"Для неё","giftTag":"Для важного события или юбилея","title":"«Королевский ритуал в 4 руки»","desc":"Особенный подарок: два мастера одновременно заботятся о вашем комфорте, пока вы полностью погружаетесь в отдых.","dur":"90 минут","price":"8 000 ₽","img":"her11.jpg","steps":["Аромознакомство и индивидуальный выбор эфирного масла","Программа для стоп со скрабом, питательной маской и горячими полотенцами","Рефлекторный массаж стоп","Нейромассаж тела в четыре руки — 60 минут","Расслабляющий массаж головы","Церемония чаепития"],"note":""},{"id":"him-1","cat":"for-him","catName":"Для него","giftTag":"","title":"«Абсолютное восстановление»","desc":"Снять напряжение, восстановить силы и вернуться в рабочий ритм.","dur":"60 минут","price":"3 500 ₽","img":"him1.jpg","steps":["Аромознакомство и индивидуальный выбор эфирного масла","Массаж всего тела на выбор: расслабляющий или тонизирующий","Завершающая церемония чаепития"],"note":""},{"id":"him-2","cat":"for-him","catName":"Для него","giftTag":"","title":"«Тайский Баланс»","desc":"Мужской ритуал для глубокого расслабления и снятия зажимов.","dur":"60 минут","price":"4 000 ₽","img":"him2.jpg","steps":["Аромознакомство и выбор эфирного масла","Тайский релакс-массаж тела","Церемония чаепития"],"note":""},{"id":"him-3","cat":"for-him","catName":"Для него","giftTag":"","title":"«Дух Леса»","desc":"Ритуал глубокого восстановления с ароматами хвои и кедра.","dur":"90 минут","price":"5 000 ₽","img":"him3.jpg","steps":["Аромознакомство","Приветственный ритуал горячими полотенцами и масляный массаж стоп","Гармонизирующий массаж тела","Хвойный пилинг-массаж тела скорлупой кедрового ореха","Освежающий душ и чаепитие"],"note":""},{"id":"him-4","cat":"for-him","catName":"Для него","giftTag":"","title":"«Спорт»","desc":"Интенсивная проработка мышц после физических нагрузок.","dur":"90 минут","price":"5 000 ₽","img":"him4.jpg","steps":["Аромознакомство","Классический массаж тела: снятие мышечного напряжения","Массаж головы","Хвойный пилинг-массаж тела","Освежающий душ и чаепитие"],"note":""},{"id":"him-5","cat":"for-him","catName":"Для него","giftTag":"","title":"«Энергия Лидера»","desc":"Двухчасовой мужской комплекс: массаж тела, стоп, головы и уход за лицом.","dur":"120 минут","price":"8 000 ₽","img":"him5.jpg","steps":["Аромознакомство и приветственный ритуал","Рефлекторный массаж ног","Тонизирующий массаж тела","Мужской уход за лицом и массаж головы","Церемония чаепития"],"note":""},{"id":"him-6","cat":"for-him","catName":"Для него","giftTag":"","title":"«Королевский ритуал в 4 руки»","desc":"Синхронная работа двух мастеров для глубокого отдыха.","dur":"90 минут","price":"8 000 ₽","img":"him6.jpg","steps":["Аромознакомство и программа для стоп","Рефлекторный массаж стоп","Нейро-массаж тела в 4 руки","Расслабляющий массаж головы и чаепитие"],"note":""},{"id":"two-1","cat":"for-two","catName":"Для двоих","giftTag":"","title":"«Прикосновение»","desc":"Часовой парный ритуал для синхронного отдыха вдвоём.","dur":"60 минут","price":"6 500 ₽","img":"us1.jpg","steps":["Аромознакомство: выбор эфирных масел","Релакс-массаж тела для двоих","Церемония чаепития"],"note":""},{"id":"two-2","cat":"for-two","catName":"Для двоих","giftTag":"","title":"«В Унисон»","desc":"Полтора часа неспешного расслабления для пары или близких.","dur":"90 минут","price":"9 000 ₽","img":"us2.jpg","steps":["Аромознакомство: выбор эфирных масел","Продолжительный релакс-массаж тела","Церемония чаепития"],"note":""},{"id":"two-3","cat":"for-two","catName":"Для двоих","giftTag":"","title":"«Для Двоих»","desc":"Расширенный парный ритуал с уходом за стопами, телом, лицом и головой.","dur":"90 минут","price":"10 500 ₽","img":"us3.jpg","steps":["Аромознакомство","Приветственный ритуал и скрабирование ног","Рефлекторный массаж стоп и тайский релакс-массаж тела","Массаж лица, питательная маска и массаж головы","Церемония чаепития"],"note":""}];
const SPA_MAP = Object.fromEntries(SPA_PROGRAMS.map(program => [program.id, program]));

let activeSpaCat = "for-her";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function fallbackCopyExec(str) {
  const textarea = document.createElement('textarea');
  textarea.value = str;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  textarea.style.top = '0';
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  let copied = false;
  try {
    copied = document.execCommand('copy') === true;
  } catch (error) {
    copied = false;
  } finally {
    document.body.removeChild(textarea);
  }
  return copied;
}

async function copyTextWithFallback(text, triggerBtn) {
  const value = String(text || '');
  let copied = false;

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(value);
      copied = true;
    } catch (error) {
      copied = false;
    }
  }

  if (!copied) copied = fallbackCopyExec(value);

  if (triggerBtn) {
    const originalText = triggerBtn.textContent;
    triggerBtn.textContent = copied ? 'Скопировано ✓' : 'Не удалось скопировать';
    window.setTimeout(() => { triggerBtn.textContent = originalText; }, 2200);
  }

  return copied;
}

function updatePreparedNotice(notice, copied) {
  if (!notice) return;
  const heading = notice.querySelector('strong');
  if (!heading) return;
  heading.textContent = copied
    ? '✅ Демо-режим: заявка сформирована и скопирована!'
    : 'Заявка сформирована, но автокопирование не сработало. Используйте кнопку «Скопировать текст ещё раз».';
}

function selectSpaTab(cat) {
  activeSpaCat = cat;
  document.querySelectorAll('#spaTabs .tab-btn').forEach(button => {
    button.classList.toggle('active', button.getAttribute('data-cat') === cat);
  });
  filterSpaCards();
}

function filterSpaCards() {
  const searchInput = document.getElementById('spaSearchInput');
  const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
  document.querySelectorAll('#spaGrid .spa-card').forEach(card => {
    const category = card.getAttribute('data-cat');
    const text = (card.innerText || '').toLowerCase();
    const matchesCategory = query ? true : (activeSpaCat === 'all' || category === activeSpaCat);
    const matchesQuery = !query || text.includes(query);
    card.classList.toggle('is-hidden', !(matchesCategory && matchesQuery));
  });
}

// Сертификаты: 20 SPA-программ из единого каталога + услуги + мастер-классы + номинал.
function switchCertMode(mode) {
  const modes = ['programs', 'services', 'school', 'nominal'];
  if (!modes.includes(mode)) return;
  document.querySelectorAll('#certModeTabs .tab-btn').forEach(button => {
    const selected = button.dataset.cmode === mode;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', selected ? 'true' : 'false');
  });
  const ids = {programs:'certPanePrograms',services:'certPaneServices',school:'certPaneSchool',nominal:'certPaneNominal'};
  for (const [key, id] of Object.entries(ids)) {
    const pane = document.getElementById(id);
    if (pane) pane.hidden = key !== mode;
  }
}

let giftSpaCategory = 'all';
function selectGiftSpaCategory(category) {
  const valid = ['all', 'for-her', 'for-him', 'for-two'];
  if (!valid.includes(category)) return;
  giftSpaCategory = category;
  document.querySelectorAll('#certSpaTabs [data-gift-cat]').forEach(button => {
    const selected = button.dataset.giftCat === category;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', selected ? 'true' : 'false');
  });
  filterGiftSpaCards();
}
function filterGiftSpaCards() {
  const search = document.getElementById('certSpaSearch');
  const query = (search?.value || '').trim().toLocaleLowerCase('ru-RU');
  let visible = 0;
  const cards = document.querySelectorAll('#certSpaGrid .spa-card');
  cards.forEach(card => {
    const matchesCategory = giftSpaCategory === 'all' || card.dataset.cat === giftSpaCategory;
    const matchesSearch = !query || (card.dataset.search || '').toLocaleLowerCase('ru-RU').includes(query);
    const show = matchesCategory && matchesSearch;
    card.classList.toggle('is-hidden', !show);
    if (show) visible++;
  });
  const counter = document.getElementById('certResultsCount');
  if (counter) counter.textContent = `Показано ${visible} из ${cards.length} программ`;
  const empty = document.getElementById('certNoResults');
  if (empty) empty.hidden = visible !== 0;
}
function selectTypedSalonService() {
  const input = document.getElementById('certCustomServiceName');
  if (!input) return;
  const name = input.value.trim();
  if (!name) {
    input.setCustomValidity('Введите название услуги.');
    input.reportValidity();
    return;
  }
  input.setCustomValidity('');
  selectCertGift(`Сертификат на услугу салона: ${name}`, 'Стоимость уточняется');
}

function selectCertGift(title, priceStr) {
  const titleElement = document.getElementById('certPreviewTitle');
  const priceElement = document.getElementById('certPreviewPrice');
  if (titleElement) titleElement.textContent = title;
  if (priceElement) priceElement.textContent = priceStr;
  openCertificateModal(`${title} (${priceStr})`);
}

function applyCustomNominal() {
  const input = document.getElementById('customNominalInput');
  if (!input) return;

  const raw = input.value.trim().replace(/[ ₽\u00A0]/g, '');
  const amountNumber = Number(raw);

  if (!/^\d+$/.test(raw) || amountNumber <= 0 || !Number.isSafeInteger(amountNumber)) {
    input.setCustomValidity('Введите положительную сумму целым числом.');
    input.reportValidity();
    return;
  }

  input.setCustomValidity('');
  const amount = `${new Intl.NumberFormat('ru-RU').format(amountNumber)} ₽`;
  selectCertGift(`Сертификат на сумму ${amount}`, amount);
}

function openDetail(id) {
  const program = SPA_MAP[id];
  if (!program) return;

  const meta = document.getElementById('detMeta');
  const title = document.getElementById('detTitle');
  const description = document.getElementById('detDesc');
  const price = document.getElementById('detPrice');
  const steps = document.getElementById('detSteps');
  const note = document.getElementById('detNote');
  const bookButton = document.getElementById('detBookBtn');
  const giftButton = document.getElementById('detGiftBtn');
  const modal = document.getElementById('modalDetail');

  if (!meta || !title || !description || !price || !steps || !note || !bookButton || !giftButton || !modal) return;

  meta.textContent = `${program.catName} • ${program.dur}`;
  title.textContent = program.title;
  description.textContent = program.desc;
  price.textContent = program.price;
  steps.innerHTML = (program.steps || []).map(step => `<li>${escapeHtml(step)}</li>`).join('');
  note.style.display = program.note ? 'block' : 'none';
  note.textContent = program.note || '';

  const label = `${program.title} (${program.catName}, ${program.price})`;
  bookButton.onclick = () => { closeModals(); openBooking(label); };
  giftButton.onclick = () => { closeModals(); openCertificateModal(`Сертификат на программу: ${label}`); };
  modal.classList.add('is-open');
}

function openBooking(serviceName) {
  const serviceInput = document.getElementById('bookService');
  const notice = document.getElementById('bookPreparedNotice');
  const modal = document.getElementById('modalBooking');
  if (serviceInput) serviceInput.value = serviceName || 'Запись в салон Pour Soi';
  if (notice) notice.classList.remove('is-visible');
  if (modal) modal.classList.add('is-open');
}

function openCertificateModal(certLabel) {
  const itemInput = document.getElementById('certOrderItem');
  const notice = document.getElementById('certPreparedNotice');
  const modal = document.getElementById('modalCertificate');
  if (itemInput) itemInput.value = certLabel || 'Подарочный сертификат Pour Soi';
  if (notice) notice.classList.remove('is-visible');
  if (modal) modal.classList.add('is-open');
}

function formatIsoDateRu(isoStr) {
  if (!isoStr || !isoStr.includes('-')) return isoStr;
  const parts = isoStr.split('-');
  return parts.length === 3 ? `${parts[2]}.${parts[1]}.${parts[0]}` : isoStr;
}

async function submitCertificateOrder(_channel) {
  const getValue = id => (document.getElementById(id)?.value || '').trim();
  const item = getValue('certOrderItem') || 'Подарочный сертификат Pour Soi';
  const buyer = getValue('certBuyerName');
  const phone = getValue('certBuyerPhone');
  const recipient = getValue('certRecipientName');
  const greeting = getValue('certGreeting');
  const comment = getValue('certComment');
  const specificService = getValue('certSpecificService');

  const lines = [
    'Здравствуйте! Заказ подарочного сертификата Pour Soi:',
    '• Выбранный сертификат: ' + item
  ];
  if (buyer) lines.push('• Имя покупателя: ' + buyer);
  if (phone) lines.push('• Телефон для связи: ' + phone);
  if (recipient) lines.push('• Имя получателя: ' + recipient);
  if (greeting) lines.push('• Поздравление / пожелание: ' + greeting);
  if (specificService) lines.push('• Уточнение услуги / процедуры: ' + specificService);
  if (comment) lines.push('• Комментарий: ' + comment);

  const message = lines.join('\n');
  const notice = document.getElementById('certPreparedNotice');
  const preview = document.getElementById('certPreparedText');
  const telegramLink = document.getElementById('certTgDirectLink');
  const telegramUrl = 'https://t.me/poursoi?text=' + encodeURIComponent(message);

  if (preview) preview.textContent = message;
  if (telegramLink) telegramLink.href = telegramUrl;
  if (notice) {
    notice.classList.add('is-visible');
    const heading = notice.querySelector('strong');
    if (heading) heading.textContent = 'Формируем текст заявки…';
  }
  const copied = await copyTextWithFallback(message);
  updatePreparedNotice(notice, copied);
}

async function submitProcedureBooking(_channel) {
  const getValue = id => (document.getElementById(id)?.value || '').trim();
  const service = getValue('bookService') || 'Запись на процедуру';
  const date = formatIsoDateRu(getValue('bookDateInput'));
  const time = getValue('bookTimeSelect') || 'Любое удобное время';
  const name = getValue('bookName');
  const phone = getValue('bookPhone');
  const comment = getValue('bookComment');

  const lines = [
    'Здравствуйте! Заявка на запись в салон Pour Soi:',
    '• Процедура / направление: ' + service,
    '• Желаемая дата и время (пожелание): ' + (date ? date + ', ' : '') + time
  ];
  if (name) lines.push('• Имя: ' + name);
  if (phone) lines.push('• Телефон: ' + phone);
  if (comment) lines.push('• Комментарий: ' + comment);

  const message = lines.join('\n');
  const notice = document.getElementById('bookPreparedNotice');
  const preview = document.getElementById('bookPreparedText');
  const telegramLink = document.getElementById('bookTgDirectLink');
  const telegramUrl = 'https://t.me/poursoi?text=' + encodeURIComponent(message);

  if (preview) preview.textContent = message;
  if (telegramLink) telegramLink.href = telegramUrl;
  if (notice) {
    notice.classList.add('is-visible');
    const heading = notice.querySelector('strong');
    if (heading) heading.textContent = 'Формируем текст заявки…';
  }
  const copied = await copyTextWithFallback(message);
  updatePreparedNotice(notice, copied);
}

function closeModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => modal.classList.remove('is-open'));
}


// Все фотографии лежат в корне репозитория рядом с index.html.
// Если загруженного файла нет, убираем только пустое место под фото, сохраняя карточку услуги.
function buildSiteImageCandidates(sourceName) {
  const clean = String(sourceName || '').replace(/\\/g, '/').split('/').pop();
  const base = clean.replace(/\.(jpe?g|png|webp)$/i, '');
  const names = [clean, `${base}.jpg`, `${base}.jpeg`, `${base}.png`, `${base}.webp`, `${base}.JPG`];
  return [...new Set(names)].filter(Boolean);
}

function applySiteImage(img, sourceName) {
  if (img.dataset.siteImageResolved === 'true') return;
  img.dataset.siteImageResolved = 'true';
  const media = img.closest('.spa-card__media, .spa-entry-card');
  const candidates = buildSiteImageCandidates(sourceName);
  let nextIndex = 0;
  function tryNext() {
    if (nextIndex >= candidates.length) {
      if (media) media.classList.add('is-image-unavailable');
      img.hidden = true;
      return;
    }
    img.src = candidates[nextIndex++];
  }
  img.addEventListener('error', tryNext);
  img.addEventListener('load', () => {
    if (media) media.classList.remove('is-image-unavailable');
    img.hidden = false;
  });
  tryNext();
}

function attachSpaProgramImages() {
  // Общий каталог используется и на spa.html, и в блоке готовых программ на certificates.html.
  document.querySelectorAll('.spa-card[data-id]').forEach(card => {
    const program = SPA_MAP[card.getAttribute('data-id')];
    const media = card.querySelector('.spa-card__media');
    if (!program || !media) return;

    let img = media.querySelector('.spa-card__image');
    if (!img) {
      img = document.createElement('img');
      img.className = 'spa-card__image';
      img.alt = program.title || 'Фотография SPA-программы Pour Soi';
      img.loading = 'lazy';
      img.decoding = 'async';
      media.insertBefore(img, media.firstChild);
    }

    // Изображения лежат в корне GitHub Pages, рядом с HTML-файлами.
    applySiteImage(img, program.img);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const now = new Date();
  const todayIso = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0')
  ].join('-');

  const dateInput = document.getElementById('bookDateInput');
  if (dateInput) {
    dateInput.min = todayIso;
    if (!dateInput.value) dateInput.value = todayIso;
  }

  const customNominalInput = document.getElementById('customNominalInput');
  if (customNominalInput) {
    customNominalInput.addEventListener('input', function () {
      this.setCustomValidity('');
    });
  }
  const customServiceInput = document.getElementById('certCustomServiceName');
  if (customServiceInput) {
    customServiceInput.addEventListener('input', () => customServiceInput.setCustomValidity(''));
  }
  if (document.getElementById('certSpaGrid')) filterGiftSpaCards();

  // Фото каждой карточки берём из поля img в SPA_PROGRAMS.
  attachSpaProgramImages();

  // Главные три карточки также проходят через обработчик путей и регистра.
  document.querySelectorAll('.spa-entry-card img').forEach(img => {
    const sourcePath = img.getAttribute('src');
    if (sourcePath) applySiteImage(img, sourcePath);
  });

  if (document.getElementById('spaGrid')) {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('cat');
    const allowedCategories = ['for-her', 'for-two', 'for-him', 'all'];
    selectSpaTab(allowedCategories.includes(category) ? category : 'for-her');
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModals();
});
