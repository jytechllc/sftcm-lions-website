/**
 * All public copy for the club site, in Chinese and English.
 *
 * Rules (from the club's draft rules, art. 25, and Lions International trademark policy):
 * - Only facts the club has confirmed go here. Items marked 待核 in the 2026-10-17
 *   founding-meeting minutes stay out until the president confirms them.
 * - No commercial products, sponsors' business, or sales platforms on this site.
 */
export type Lang = "zh" | "en";

export const CONTACT = {
  // Placeholder until the club confirms a public contact (秘书长 Weijing Lin).
  phone: "+1 415-370-2887",
  phoneDisplay: "(415) 370-2887",
};

export const LCI_CLUB_ID = "200758";

export const content = {
  zh: {
    meta: {
      title: "旧金山世界中医药总会狮子会 | 国际狮子会旧金山分会",
      description:
        "旧金山世界中医药总会狮子会是国际狮子会旗下的地方分会，以中医药为特色，开展健康讲座、义诊与社区公益服务。",
    },
    nav: { about: "关于本会", service: "服务重点", team: "理事会", meetings: "例会", join: "加入我们", lang: "EN", langHref: "/en" },
    hero: {
      eyebrow: "国际狮子会 · 美国旧金山",
      name: "旧金山世界中医药总会狮子会",
      nameAlt: "San Francisco Global Chinese Medicine Headquarters Lions Club",
      motto: "We Serve · 我们服务",
      tagline: "传承中医药文化，服务社区健康，推动大健康公益与国际交流。",
      cta: "加入我们",
      cta2: "了解本会",
    },
    about: {
      title: "关于本会",
      body: [
        "本会是国际狮子会（Lions International）旗下的地方分会，于 2026 年在旧金山成立，以中医药为特色开展社区服务。",
        "我们的会员来自中医、医疗、法律、工程、商业与社区服务等领域。本会遵循国际狮子会标准分会章程，所有服务活动以公益为目的，不以本会名义从事商业经营。",
      ],
      facts: [
        { k: "所属组织", v: "国际狮子会（Lions International）" },
        { k: "分会编号", v: LCI_CLUB_ID },
        { k: "所在地", v: "美国加州旧金山" },
        { k: "成立", v: "2026 年" },
      ],
    },
    service: {
      title: "服务重点",
      subtitle: "本会成立不久，以下项目正在筹备，具体活动会在这里公布。",
      items: [
        { title: "中医药健康讲座", body: "邀请中医师面向社区讲解养生保健与常见病预防知识，计划每年至少举办一场大型讲座。", status: "筹备中" },
        { title: "社区义诊", body: "组织持证中医师为社区居民、长者提供免费健康咨询。", status: "筹备中" },
        { title: "中医药文化交流", body: "推动中医药文化的传承与国际交流，联系湾区及海外的中医药界同仁。", status: "筹备中" },
        { title: "青少年领袖培养", body: "结合狮子会青少年项目，培养青少年的服务意识与领导能力。", status: "筹备中" },
      ],
      lciNote: "本会也参与国际狮子会的全球服务领域，例如视力保护、糖尿病防治、饥饿救助与环境保护。",
      lciLink: "了解国际狮子会的全球服务",
    },
    team: {
      title: "理事会",
      subtitle: "本会首届理事会于 2026 年 10 月 17 日召开第一次会议。",
      members: [
        { role: "创会会长", name: "刘雅典娜" },
        { role: "副会长", name: "梅勇刚" },
        { role: "秘书长", name: "林杰" },
        { role: "副秘书长", name: "施蓉" },
        { role: "高级顾问", name: "吴毅华" },
      ],
      more: "完整的理事与委员会名单确认后公布。",
    },
    meetings: {
      title: "例会",
      items: [
        { k: "时间", v: "每月第二个星期六" },
        { k: "地点", v: "旧金山，由理事轮流提供场地，每次例会前通知" },
        { k: "线上参加", v: "出差或不便到场的会员可通过 Zoom 参加" },
      ],
      note: "欢迎有兴趣的朋友来旁听例会，请先联系秘书处确认时间和地点。",
    },
    join: {
      title: "加入我们",
      body: "狮子会会员是愿意为社区服务的志愿者。无论你是否从事中医药行业，只要认同「我们服务」的精神，都欢迎加入。",
      steps: ["联系秘书处，了解本会和会员义务", "旁听一次例会", "由会员推荐，经理事会同意后入会"],
      contactLabel: "秘书处电话",
    },
    footer: {
      lci: "本会是国际狮子会的会员分会。Lions、Lions International 名称与会徽是国际狮子会的注册商标，经授权供会员分会使用。",
      copy: "旧金山世界中医药总会狮子会",
    },
  },
  en: {
    meta: {
      title: "San Francisco Global Chinese Medicine Headquarters Lions Club | Lions International",
      description:
        "A Lions International club in San Francisco with a focus on Chinese medicine: health talks, free clinics and community service.",
    },
    nav: { about: "About", service: "Service", team: "Board", meetings: "Meetings", join: "Join us", lang: "中文", langHref: "/" },
    hero: {
      eyebrow: "Lions International · San Francisco, CA",
      name: "San Francisco Global Chinese Medicine Headquarters Lions Club",
      nameAlt: "旧金山世界中医药总会狮子会",
      motto: "We Serve",
      tagline: "Sharing the heritage of Chinese medicine, serving community health, and connecting people through service.",
      cta: "Join us",
      cta2: "About the club",
    },
    about: {
      title: "About the club",
      body: [
        "We are a local club of Lions International, founded in San Francisco in 2026, with community service centred on Chinese medicine.",
        "Our members come from Chinese medicine, healthcare, law, engineering, business and community service. The club follows the Lions International Standard Club Constitution; all of our service is non-profit, and the club's name is never used for commercial business.",
      ],
      facts: [
        { k: "Part of", v: "Lions International" },
        { k: "Club ID", v: LCI_CLUB_ID },
        { k: "Location", v: "San Francisco, California" },
        { k: "Founded", v: "2026" },
      ],
    },
    service: {
      title: "Our service",
      subtitle: "We are a new club. These projects are in preparation; dates will be posted here.",
      items: [
        { title: "Chinese medicine health talks", body: "Practitioners share everyday health and prevention knowledge with the community, with at least one major talk a year.", status: "In preparation" },
        { title: "Free community clinics", body: "Licensed practitioners offer free health consultations to residents and seniors.", status: "In preparation" },
        { title: "Cultural exchange", body: "Passing on the heritage of Chinese medicine and connecting practitioners in the Bay Area and abroad.", status: "In preparation" },
        { title: "Youth leadership", body: "Building service and leadership skills in young people through Lions youth programs.", status: "In preparation" },
      ],
      lciNote: "We also take part in Lions International's global causes, such as vision, diabetes, hunger and the environment.",
      lciLink: "Lions International's global causes",
    },
    team: {
      title: "Board",
      subtitle: "The club's founding board first met on 17 October 2026.",
      members: [
        { role: "Charter President", name: "Athena Liu" },
        { role: "Vice President", name: "Yonggang Mei" },
        { role: "Secretary", name: "Weijing Lin" },
        { role: "Deputy Secretary", name: "Rong Shi (Liona)" },
        { role: "Senior Advisor", name: "Yihua Wu" },
      ],
      more: "The full board and committee list will be posted once confirmed.",
    },
    meetings: {
      title: "Meetings",
      items: [
        { k: "When", v: "Second Saturday of every month" },
        { k: "Where", v: "San Francisco; the venue rotates among board members and is announced before each meeting" },
        { k: "Online", v: "Members who are travelling can join on Zoom" },
      ],
      note: "Guests are welcome. Please contact the secretary first to confirm the time and place.",
    },
    join: {
      title: "Join us",
      body: "Lions are volunteers who serve their communities. You don't need to work in Chinese medicine; if you share the spirit of \"We Serve\", you're welcome here.",
      steps: ["Contact the secretary to learn about the club and what membership involves", "Attend a meeting as a guest", "Join on a member's sponsorship, with board approval"],
      contactLabel: "Secretary",
    },
    footer: {
      lci: "This club is a member of Lions International. The Lions and Lions International names and emblem are registered trademarks of Lions Clubs International, used by member clubs under licence.",
      copy: "San Francisco Global Chinese Medicine Headquarters Lions Club",
    },
  },
} as const;
