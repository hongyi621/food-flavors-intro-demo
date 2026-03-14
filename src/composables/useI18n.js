import { ref, computed } from 'vue'

const currentLang = ref('en')

const messages = {
  en: {
    // Nav
    nav: {
      home: 'Home',
      about: 'About',
      flavors: 'Flavors',
      applications: 'Applications',
      whyUs: 'Why Us',
      contact: 'Contact',
      cta: 'Get Started',
    },

    // Hero
    hero: {
      badge: 'Professional Flavors & Fragrances',
      titleLine1: 'Epochal',
      titleLine2: 'Aromatic Ltd.',
      subtitle: 'As a professional Flavors & Fragrances enterprise, Shanghai Epochal Aromatic LTD. possesses not only specialized R&D group, flexible sales team, but also experienced technical support specialists in both of the flavors and fragrances sectors.',
      cta1: 'Explore Flavors',
      cta2: 'Learn More',
      stat1Value: '50+',
      stat1Label: 'Flavor Varieties',
      stat2Value: '7+',
      stat2Label: 'Industry Sectors',
      stat3Value: '100%',
      stat3Label: 'Natural Ingredients',
      motto: 'Your Success, We Growing',
    },

    // About / Expertise
    about: {
      badge: 'Research & Development',
      title: 'Integrated R&D and\nCustomer Collaboration',
      description: 'In Epochal Aromatic, our R&D center maintains close cooperation with the sales staff to have an accurate understanding of customers\' needs and desires. Following thorough discussion with the customers, we create flavors and samples for the final products, which can better represent the customer\'s intended concepts and images, and then evaluate them. After receiving approval from customer, the formulation is finalized.',
      description2: 'With the development of health-food\'s market, Epochal Aromatic has continuously been engaged in research activities in many areas to obtain the safe and reliable flavors from natural ingredients. There are natural extracts, such as Green tea, lemon tea, milk & fruit, as well as those full of fresh aroma & taste of bakery.',
      steps: [
        { num: '01', title: 'Consultation', desc: 'In-depth consultation and discussion to understand your needs' },
        { num: '02', title: 'Concept Creation', desc: 'Concept-based flavor creation and initial formulation' },
        { num: '03', title: 'Sample Development', desc: 'Professional sample development and prototyping' },
        { num: '04', title: 'Evaluation', desc: 'Product evaluation, refinement, and quality testing' },
        { num: '05', title: 'Final Delivery', desc: 'Final formulation after customer approval and sign-off' },
      ],
    },

    // Flavors
    flavors: {
      badge: 'Our Collections',
      title: 'Sweet Flavor Collection',
      subtitle: 'Comprehensive range of premium flavors crafted with natural ingredients for diverse applications.',
      categories: {
        citrus: {
          name: 'Citrus',
          icon: '🍊',
          items: ['Lemon', 'Mandarin', 'Lime', 'Grapefruit', 'Orange'],
        },
        berry: {
          name: 'Berry',
          icon: '🍓',
          items: ['Strawberry', 'Blueberry', 'Blackcurrant', 'Blackberry'],
        },
        fruit: {
          name: 'Fruit',
          icon: '🍍',
          items: ['Apple', 'Banana', 'Watermelon', 'Hami Melon', 'Grape', 'Passionfruit', 'Pineapple', 'Mango', 'Coconut', 'Haw'],
        },
        nut: {
          name: 'Nut',
          icon: '🌰',
          items: ['Peanut', 'Walnut', 'Hazelnut'],
        },
        brown: {
          name: 'Brown',
          icon: '☕',
          items: ['Cocoa Butter', 'Cocoa', 'Chocolate', 'Coffee', 'Malt'],
        },
        alcoholic: {
          name: 'Alcoholic',
          icon: '🍷',
          items: ['Wine', 'Brandy', 'Beer', 'Chinese Hard-Liquor'],
        },
        dairy: {
          name: 'Dairy',
          icon: '🥛',
          items: ['Milk', 'Cream', 'Butter', 'Custard', 'Egg', 'Vanilla'],
        },
        tea: {
          name: 'Tea',
          icon: '🍵',
          items: ['Green Tea', 'Red Tea', 'Lemon-tea', 'Jasmin'],
        },
        specialty: {
          name: 'Others',
          icon: '🌿',
          items: ['Green Bean', 'Red Bean', 'Mint', 'Cola', 'Taro', 'Ginseng', 'Sesame'],
        },
      },
    },

    // Applications
    applications: {
      badge: 'Application Range',
      title: 'Application Range',
      subtitle: 'Our flavors are widely used across multiple industries.',
      categories: [
        {
          name: 'Confectionery',
          icon: '🍬',
          items: ['HBC', 'Chocolate', 'Chewing Candy', 'Gum & Jellies'],
        },
        {
          name: 'Beverage',
          icon: '🥤',
          items: ['CSD', 'RTD Tea', 'Juice', 'Powder Drink'],
        },
        {
          name: 'Dairy & Dessert',
          icon: '🧁',
          items: ['Yoghurt', 'Smoothie', 'Flavoured Milk'],
        },
        {
          name: 'Bakery',
          icon: '🍰',
          items: ['Cracker', 'Cake', 'Cookie', 'Pie', 'Sandwich Biscuit'],
        },
        {
          name: 'Oral Care',
          icon: '🦷',
          items: ['Tooth Paste', 'Functional Chewing Gum', 'Mouthwash'],
        },
      ],
    },

    // Why Choose Us
    whyUs: {
      badge: 'Technical Capabilities',
      title: 'Why Choose Epochal Aromatic?',
      subtitle: 'We are committed to delivering innovative, safe, and reliable flavor solutions.',
      reasons: [
        { icon: '📦', title: 'Complete Product Range', desc: 'Comprehensive flavor portfolio covering all major categories' },
        { icon: '🎨', title: 'Aromatic, Authentic Profile', desc: 'True-to-nature flavor profiles with aromatic excellence' },
        { icon: '🧪', title: 'Special Flavor', desc: 'Proprietary specialty flavors with professional technical expertise' },
        { icon: '🔬', title: 'Cutting Edge Analytical Ability', desc: 'Advanced analytical instruments for precise flavor development' },
        { icon: '🛡️', title: 'High Quality Guarantee', desc: 'Rigorous quality control ensuring consistency and safety' },
        { icon: '💰', title: 'Cost-effective', desc: 'Competitive pricing without compromising on quality' },
      ],
      healthBadge: 'Health & Natural Ingredients',
      healthTitle: 'Commitment to Natural Quality',
      healthDesc: 'In response to the increasingly diversifying consumer needs, we are required to accurately attend to wide-range demands. Beside creating tea flavors, milk flavor and fruit flavors etc. for food products and beverages, we pursue safe, reliable and natural flavor materials to make products with value other than aroma and taste.',
      healthPoints: [
        'Safe and reliable flavor systems',
        'Natural extracts (green tea, lemon tea, fruit extracts, milk notes)',
        'Fresh and authentic aroma profiles for bakery and beverage',
        'Natural and high-value flavor materials',
      ],
      visionTitle: 'Our Vision',
      visionDesc: 'In response to the increasingly diversifying consumer needs, we pursue safe, reliable and natural flavor materials to make products with value other than aroma and taste.',
    },

    // Contact
    contact: {
      badge: 'Get in Touch',
      title: 'Let\'s Talk\nFlavors',
      desc: 'Have a question, custom flavor request, or wholesale inquiry? We\'d love to hear from you. Fill out the form and our team will get back to you within 24 hours.',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      emailVal: 'hello@epochal-aromatic.com',
      phoneVal: '+86 21 5555 8888',
      addressVal: 'Shanghai, China',
      firstName: 'First Name',
      lastName: 'Last Name',
      emailLabel: 'Email',
      subject: 'Subject',
      subjectPlaceholder: 'Select a topic',
      subjectOptions: {
        general: 'General Inquiry',
        wholesale: 'Wholesale / Bulk Orders',
        custom: 'Custom Flavor Request',
        support: 'Product Support',
      },
      message: 'Message',
      messagePlaceholder: 'Tell us about your flavor needs...',
      submit: 'Send Message',
      submitted: '✓ Message Sent!',
    },

    // Footer
    footer: {
      desc: 'As a professional Flavors & Fragrances enterprise, Epochal Aromatic possesses specialized R&D, flexible sales team, and experienced technical support in both flavors and fragrances sectors.',
      quickLinks: 'Quick Links',
      products: 'Products',
      stayUpdated: 'Stay Updated',
      newsletterDesc: 'Subscribe for new flavors, industry news, and updates.',
      emailPlaceholder: 'Your email',
      copyright: '© {year} Shanghai Epochal Aromatic Ltd. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      classicFlavors: 'Classic Flavors',
      premiumCollection: 'Premium Collection',
      newArrivals: 'New Arrivals',
      customDev: 'Custom Development',
    },
  },

  zh: {
    // Nav
    nav: {
      home: '首页',
      about: '关于我们',
      flavors: '产品系列',
      applications: '应用领域',
      whyUs: '选择我们',
      contact: '联系我们',
      cta: '立即咨询',
    },

    // Hero
    hero: {
      badge: '专业香精香料解决方案',
      titleLine1: '珀臣',
      titleLine2: '香精',
      subtitle: '上海珀臣香精香料有限公司作为一家专业的香精香料公司，拥有强大的科研技术力量，灵活的专业销售团队，并且在食用香精和日用香精应用领域都配有经验丰富的技术人员。',
      cta1: '探索产品',
      cta2: '了解更多',
      stat1Value: '50+',
      stat1Label: '香精品种',
      stat2Value: '7+',
      stat2Label: '行业领域',
      stat3Value: '100%',
      stat3Label: '天然原料',
      motto: '你的成功，我的成长',
    },

    // About / Expertise
    about: {
      badge: '研究与开发',
      title: '研发与客户\n协同合作',
      description: '我们的研发人员与销售团队保持着紧密的联系，通过共同分析客户信息达到准确把握客户诉求。通过与客户的沟通，根据客户对目标产品的描述，我们创造出合适的香精和试作品并与客户共同评价这些香精和产品。通过不断的评价和改良，直到客户最终满意后，我们将保证该香精的供给唯一性和高品质性。',
      description2: '随着健康食品市场的不断发展，我们的研发人员也在不断探求更加安全与天然的香精和素材。目前，我们不仅开发有绿茶、柠檬茶、牛奶、水果等系列天然和天然等同香精，同时也开发出各类香气和口味上佳的耐温类香精。',
      steps: [
        { num: '01', title: '深入沟通', desc: '与客户进行深入的咨询和讨论，了解需求' },
        { num: '02', title: '概念创作', desc: '基于概念的香精创作和初步配方' },
        { num: '03', title: '样品开发', desc: '专业的样品开发和原型制作' },
        { num: '04', title: '评估完善', desc: '产品评估、改进和质量检测' },
        { num: '05', title: '最终交付', desc: '客户认可后的最终配方和交付' },
      ],
    },

    // Flavors
    flavors: {
      badge: '产品香型',
      title: '甜味香精系列',
      subtitle: '全面的优质香精系列，采用天然原料精心制作，适用于多种应用场景。',
      categories: {
        citrus: {
          name: '柑橘类',
          icon: '🍊',
          items: ['柠檬', '桔子', '白柠檬', '西柚', '橙'],
        },
        berry: {
          name: '莓类',
          icon: '🍓',
          items: ['草莓', '蓝莓', '黑加仑', '黑莓'],
        },
        fruit: {
          name: '其它水果类',
          icon: '🍍',
          items: ['苹果', '香蕉', '西瓜', '哈密瓜', '葡萄', '西番莲', '菠萝', '芒果', '椰子', '山楂'],
        },
        nut: {
          name: '坚果类',
          icon: '🌰',
          items: ['花生', '核桃', '榛子'],
        },
        brown: {
          name: '棕色类',
          icon: '☕',
          items: ['可可油', '可可', '巧克力', '咖啡', '麦芽'],
        },
        alcoholic: {
          name: '酒类',
          icon: '🍷',
          items: ['葡萄酒', '白兰地', '啤酒', '白酒'],
        },
        dairy: {
          name: '奶类',
          icon: '🥛',
          items: ['牛奶', '奶油', '黄油', '蛋奶', '蛋黄', '香草'],
        },
        tea: {
          name: '茶类',
          icon: '🍵',
          items: ['绿茶', '红茶', '柠檬茶', '茉莉茶'],
        },
        specialty: {
          name: '其它',
          icon: '🌿',
          items: ['绿豆', '红豆', '薄荷', '可乐', '香芋', '人参', '芝麻'],
        },
      },
    },

    // Applications
    applications: {
      badge: '产品应用范围',
      title: '产品应用范围',
      subtitle: '我们的香精广泛应用于多个行业领域。',
      categories: [
        {
          name: '糖果',
          icon: '🍬',
          items: ['硬糖 HBC', '巧克力', '软糖', '胶基糖'],
        },
        {
          name: '饮料',
          icon: '🥤',
          items: ['碳酸饮料 CSD', '茶饮料 RTD Tea', '果汁饮料', '固体饮料'],
        },
        {
          name: '奶制品与甜点',
          icon: '🧁',
          items: ['酸奶', '果汁奶', '风味奶饮料'],
        },
        {
          name: '焙烤食品',
          icon: '🍰',
          items: ['饼干', '蛋糕', '曲奇', '派', '夹心饼干'],
        },
        {
          name: '口腔护理产品',
          icon: '🦷',
          items: ['牙膏', '口香糖', '漱口水'],
        },
      ],
    },

    // Why Choose Us
    whyUs: {
      badge: '产品能力',
      title: '为什么选择珀臣香精？',
      subtitle: '我们致力于提供创新、安全、可靠的香精解决方案。',
      reasons: [
        { icon: '📦', title: '完整的产品系列', desc: '涵盖所有主要品类的全面香精产品线' },
        { icon: '🎨', title: '气味芬芳，香味纯正', desc: '还原自然的香气特征，芳香卓越' },
        { icon: '🧪', title: '专业技术的香精', desc: '具有专业技术的特色香精产品' },
        { icon: '🔬', title: '尖端分析的仪器', desc: '先进的分析仪器，精确的香精开发' },
        { icon: '🛡️', title: '高品质保证', desc: '严格的质量控制，确保一致性和安全性' },
        { icon: '💰', title: '成本经济', desc: '在不影响品质的前提下提供有竞争力的价格' },
      ],
      healthBadge: '健康与天然原料',
      healthTitle: '对天然品质的承诺',
      healthDesc: '为了顺应市场发展和客户需求的多元化，上海珀臣香精香料有限公司在食品香精更广阔的领域中不断壮大自己的技术和业务力量。在发展传统的食品香精，比如，茶香精，牛奶香精和果味香精的同时，我们也不断的探寻和创造更加安全、可靠、天然的香精和素材，使产品在满足香气和口味之外，具有更高的附加价值。',
      healthPoints: [
        '安全可靠的香精体系',
        '天然提取物（绿茶、柠檬茶、水果提取物、奶香等）',
        '烘焙和饮料应用的清新真实香气',
        '天然高价值香精原料',
      ],
      visionTitle: '我们的愿景',
      visionDesc: '顺应市场发展和客户需求的多元化，不断探寻和创造更加安全、可靠、天然的香精和素材，使产品具有更高的附加价值。',
    },

    // Contact
    contact: {
      badge: '联系我们',
      title: '咨询合作',
      desc: '如有疑问、定制香精需求或批发咨询，欢迎随时联系我们。填写表格，我们的团队将在24小时内回复您。',
      email: '电子邮箱',
      phone: '联系电话',
      address: '公司地址',
      emailVal: 'hello@epochal-aromatic.com',
      phoneVal: '+86 21 5555 8888',
      addressVal: '中国 · 上海',
      firstName: '姓',
      lastName: '名',
      emailLabel: '电子邮箱',
      subject: '主题',
      subjectPlaceholder: '请选择主题',
      subjectOptions: {
        general: '一般咨询',
        wholesale: '批发/大宗订单',
        custom: '定制香精需求',
        support: '产品技术支持',
      },
      message: '留言',
      messagePlaceholder: '请描述您的香精需求...',
      submit: '发送消息',
      submitted: '✓ 已发送！',
    },

    // Footer
    footer: {
      desc: '上海珀臣香精香料有限公司作为一家专业的香精香料公司，拥有强大的科研技术力量，灵活的专业销售团队，并且在食用香精和日用香精应用领域都配有经验丰富的技术人员。',
      quickLinks: '快速链接',
      products: '产品系列',
      stayUpdated: '订阅更新',
      newsletterDesc: '订阅获取最新香精产品、行业资讯和公司动态。',
      emailPlaceholder: '您的邮箱',
      copyright: '© {year} 上海珀臣香精香料有限公司 版权所有',
      privacy: '隐私政策',
      terms: '服务条款',
      classicFlavors: '经典香精',
      premiumCollection: '高端系列',
      newArrivals: '新品上市',
      customDev: '定制开发',
    },
  },
}

export function useI18n() {
  const lang = computed(() => currentLang.value)

  const t = (path) => {
    const keys = path.split('.')
    let result = messages[currentLang.value]
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key]
      } else {
        return path
      }
    }
    return result
  }

  const toggleLang = () => {
    currentLang.value = currentLang.value === 'en' ? 'zh' : 'en'
  }

  const setLang = (l) => {
    currentLang.value = l
  }

  return { lang, t, toggleLang, setLang, currentLang }
}
