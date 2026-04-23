/**
 * i18n - Japanese / English bilingual support
 */
const translations = {
  ja: {
    page_title: "ポートフォリオ | 宇野 宏紀",
    nav_about: "自己紹介",
    nav_skills: "スキル",
    nav_projects: "プロジェクト",
    nav_experience: "経歴",
    nav_certifications: "資格",
    nav_blog: "記事",
    hero_description:
      "画像処理・コンピュータビジョンに情熱を持つ学生エンジニアです。深層学習を活用した画像認識・生成システムの開発に取り組んでいます。",
    about_title: "自己紹介",
    about_photo_placeholder: "写真を配置",
    about_text_1:
      "筑波大学情報学群情報科学類に在学中の4年生です。画像処理・コンピュータビジョンに興味を持ち、深層学習を用いた研究・開発に取り組んでいます。",
    about_text_2:
      "PyTorchやOpenCVを使った画像認識・物体検出・生成モデルの実装経験があります。学術的な知識と実装力を兼ね備えたエンジニアを目指しています。",
    about_location_label: "所在地",
    about_location_value: "茨城県",
    about_education_label: "学歴",
    about_education_value: "筑波大学 情報学群 情報科学類",
    about_interest_label: "興味分野",
    about_interest_value: "画像処理 / 深層学習 / コンピュータビジョン",
    skills_title: "スキル",
    skills_languages: "プログラミング言語",
    skills_frameworks: "フレームワーク / ライブラリ",
    skills_tools: "ツール / その他",
    projects_title: "プロジェクト",
    projects_screenshot: "スクリーンショット",
    projects_demo: "デモ",
    project1_title: "オセロゲーム",
    project1_description:
      "Python と Tkinter を用いた GUI オセロゲーム。プレイヤー対コンピュータのGUI対戦モードと、モンテカルロ法AIによる自動対戦・統計計測モードを実装。",
    project2_title: "GPA計算Webアプリ",
    project2_description:
      "FastAPI + pandas で構築した成績管理Webアプリ。CSVをアップロードするだけで累積GPA（4.3制）とA以上の単位取得割合を自動計算。",
    project3_title: "AU条件付き顔表情変換",
    project3_description:
      "AffectNet と OpenFace の Action Unit 出力を活用し、SD2.1 + ControlNet + LoRA で顔の同一性を保ちながら表情のみを編集するシステム。ResNet18の蒸留によるAU推定モデルも実装。",
    project4_title: "産業用異常検知比較実験",
    project4_description:
      "MVTec-AD を対象に GLAD / EfficientAD / PUAD の3手法を5カテゴリ（bottle / cable / capsule / pill / grid）で比較した実験リポジトリ。Colab 上での再現・依存関係修正・評価指標の統一・可視化・考察まで含む。",
    experience_title: "経歴",
    exp1_date: "2026年2月 - 2026年4月",
    exp1_title: "株式会社ExaWizards - ウィンターインターン",
    exp1_description:
      "AWS Neptune Analytics を用いた Graph RAG ベースの情報検索デモアプリを開発。グラフ構造を活用した検索の仕組みを理解しながら、LLM・検索基盤・クラウドサービスを組み合わせたシステム開発を経験。",
    exp2_date: "2025年8月 - 2026年2月",
    exp2_title: "株式会社Ridge-i - 長期インターン",
    exp2_description:
      "画像処理・機械学習領域の実務インターンとして、コルクのAI異常検知システム開発（調査・モデル改善・評価・発表）と、衛星データを用いたデータセンター候補地推薦システム開発に従事。仮説立案から改善・検証まで継続的に取り組みました。",
    exp3_date: "2023年4月 - 2026年3月",
    exp3_title: "筑波大学 情報学群 情報科学類",
    exp3_description:
      "コンピュータサイエンスを専攻。画像処理・コンピュータビジョンに関する研究を行っている。",
    certifications_title: "資格",
    cert1_title: "基本情報技術者試験",
    cert1_date: "2023年10月 取得",
    cert2_title: "応用情報技術者試験",
    cert2_date: "2024年4月 取得",
    cert3_title: "AWS Cloud Practitioner",
    cert3_date: "2024年6月 取得",
    cert4_title: "TOEIC 800点",
    cert4_date: "2023年12月 取得",
    cert5_title: "GCI 修了",
    cert5_date: "東京大学 GCI（グローバル消費者インテリジェンス）",
    blog_title: "技術記事",
    blog1_title: "Reactのパフォーマンス最適化テクニック5選",
    blog1_date: "2024年10月",
    blog2_title: "Docker入門：開発環境をコンテナ化するメリット",
    blog2_date: "2024年8月",
    blog3_title: "TypeScriptの型パズルを解いてみた",
    blog3_date: "2024年6月",
    blog4_title: "GLAD・EfficientAD・PUADをColabで再現して5カテゴリ比較した話",
    blog4_date: "2025年",
    blog5_title: "図面解析におけるマルチモーダル Graph RAG の有効性検証とデモアプリ開発",
    blog5_date: "2026年",
  },
  en: {
    page_title: "Portfolio | Hiroki Uno",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_certifications: "Certifications",
    nav_blog: "Blog",
    hero_description:
      "A student engineer passionate about image processing and computer vision. I develop image recognition and generation systems leveraging deep learning.",
    about_title: "About Me",
    about_photo_placeholder: "Place photo here",
    about_text_1:
      "4th-year student at University of Tsukuba, School of Informatics and Engineering. Passionate about image processing and computer vision, I focus on research and development using deep learning.",
    about_text_2:
      "I have hands-on experience building image recognition, object detection, and generative models using PyTorch and OpenCV. I aim to be an engineer who bridges academic knowledge with practical implementation.",
    about_location_label: "Location",
    about_location_value: "Ibaraki, Japan",
    about_education_label: "Education",
    about_education_value: "Univ. of Tsukuba, Dept. of Computer Science",
    about_interest_label: "Interests",
    about_interest_value: "Image Processing / Deep Learning / CV",
    skills_title: "Skills",
    skills_languages: "Programming Languages",
    skills_frameworks: "Frameworks / Libraries",
    skills_tools: "Tools / Others",
    projects_title: "Projects",
    projects_screenshot: "Screenshot",
    projects_demo: "Demo",
    project1_title: "Othello Game",
    project1_description:
      "GUI Othello game built with Python and Tkinter. Features a player-vs-computer GUI mode and an auto-battle statistics mode powered by Monte Carlo method AI.",
    project2_title: "GPA Calculator Web App",
    project2_description:
      "Academic performance web app built with FastAPI and pandas. Automatically calculates cumulative GPA (4.3 scale) and A-grade ratio from uploaded CSV files.",
    project3_title: "AU-Conditioned Facial Expression Editing",
    project3_description:
      "Facial expression editing system using AffectNet and OpenFace Action Units. Edits expressions while preserving identity via SD2.1 + ControlNet + LoRA. Includes AU estimation model via ResNet18 knowledge distillation.",
    project4_title: "Industrial Anomaly Detection Comparison",
    project4_description:
      "Experiment repository comparing GLAD / EfficientAD / PUAD across 5 MVTec-AD categories (bottle / cable / capsule / pill / grid). Covers Colab reproduction, dependency fixes, unified evaluation metrics, visualization, and analysis.",
    experience_title: "Experience",
    exp1_date: "Feb 2026 - Apr 2026",
    exp1_title: "ExaWizards Inc. - Winter Intern",
    exp1_description:
      "Developed a Graph RAG-based information retrieval demo app using AWS Neptune Analytics. Gained experience combining LLM, retrieval infrastructure, and cloud services through graph-structured information retrieval.",
    exp2_date: "Aug 2025 - Feb 2026",
    exp2_title: "Ridge-i Inc. - Long-term Intern",
    exp2_description:
      "Worked as a practical intern in image processing and ML. Contributed to an AI anomaly detection system for cork (research, model improvement, evaluation) and a satellite-data-based data center site recommendation system. Engaged continuously from hypothesis to verification.",
    exp3_date: "Apr 2023 - Mar 2026",
    exp3_title: "Univ. of Tsukuba, Dept. of Computer Science",
    exp3_description:
      "Majoring in Computer Science. Conducting research in image processing and computer vision.",
    certifications_title: "Certifications",
    cert1_title: "Fundamental IT Engineer Exam",
    cert1_date: "Oct 2023",
    cert2_title: "Applied IT Engineer Exam",
    cert2_date: "Apr 2024",
    cert3_title: "AWS Cloud Practitioner",
    cert3_date: "Jun 2024",
    cert4_title: "TOEIC 800",
    cert4_date: "Dec 2023",
    cert5_title: "GCI Certificate",
    cert5_date: "Univ. of Tokyo GCI (Global Consumer Intelligence)",
    blog_title: "Blog / Articles",
    blog1_title: "5 React Performance Optimization Techniques",
    blog1_date: "Oct 2024",
    blog2_title: "Docker Intro: Benefits of Containerizing Dev Environments",
    blog2_date: "Aug 2024",
    blog3_title: "Solving TypeScript Type Puzzles",
    blog3_date: "Jun 2024",
    blog4_title: "Reproducing GLAD, EfficientAD & PUAD on Colab and Comparing 5 Categories",
    blog4_date: "2025",
    blog5_title: "Validating Multimodal Graph RAG for Drawing Analysis and Building a Demo App",
    blog5_date: "2026",
  },
};

function getCurrentLang() {
  return localStorage.getItem("lang") || "ja";
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations(lang);
  updateLangToggle(lang);
  document.documentElement.lang = lang;
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      if (el.tagName === "TITLE") {
        document.title = t[key];
      } else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
}

function updateLangToggle(lang) {
  document.querySelectorAll(".lang-toggle__option").forEach((el) => {
    el.classList.toggle("active", el.getAttribute("data-lang") === lang);
  });
}

function initI18n() {
  const lang = getCurrentLang();
  applyTranslations(lang);
  updateLangToggle(lang);
  document.documentElement.lang = lang;

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = getCurrentLang();
      setLang(current === "ja" ? "en" : "ja");
    });
  }
}

document.addEventListener("DOMContentLoaded", initI18n);
