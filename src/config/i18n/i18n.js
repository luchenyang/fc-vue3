import Axios from '../axios/axios'
import axios from 'axios'
import { createI18n } from 'vue-i18n'




/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */

const myLocale = 'zh-CN';


const i18n = createI18n({
  legacy: true,
  globalInjection: true
})


function setI18nLanguage(lang) {
  i18n.global.locale = myLocale
  let languages = JSON.parse(sessionStorage.getItem("languages"));
  i18n.global.setLocaleMessage(lang, languages[lang])
  axios.defaults.headers.common['Accept-Language'] = lang
  localStorage.setItem(process.env.VUE_APP_LOCAL_LANG_KEY, lang);
  document.querySelector('html').setAttribute('lang', lang)
}

export async function loadLanguageAsync(lang, init) {
  let languuages = sessionStorage.getItem("languages");
  if (languuages == null || languuages == undefined) {
    languuages = {};
  } else {
    languuages = JSON.parse(languuages);
  }

  // 如果语言已经加载
  if (Object.keys(languuages).includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // 如果尚未加载语言
  let arr = lang.split("-");
  let res = await loadMessage(arr);
  languuages[lang] = res;
  sessionStorage.setItem("languages", JSON.stringify(languuages));
  setI18nLanguage(lang);
  return lang;
}


async function loadMessage(arr) {
  return  await Axios.post('/pre/i18n/getMessageByLocale', { 'lanuage': arr[0], 'country': arr[1] });

}

export function loadMessageType() {
  return Axios.post('/pre/i18n/getMessageCountry', {});
}

export default i18n;
