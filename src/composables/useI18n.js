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
      titleLine1: 'Shanghai Epochal',
      titleLine2: 'Aromatic Ltd.',
      subtitle: 'A professional Flavors & Fragrances enterprise dedicated to delivering high-quality, safe, and innovative flavor solutions. With a specialized R&D team and experienced technical support specialists, we provide customized flavor development services tailored to diverse industry needs.',
      cta1: 'Explore Flavors',
      cta2: 'Learn More',
      stat1Value: '50+',
      stat1Label: 'Flavor Varieties',
      stat2Value: '7+',
      stat2Label: 'Industry Sectors',
      stat3Value: '100%',
      stat3Label: 'Natural Ingredients',
      motto: 'Your Success Is Our Mission',
    },

    // About / Expertise
    about: {
      badge: 'Our Expertise',
      title: 'Integrated R&D and\nCustomer Collaboration',
      description: 'Our R&D center works closely with our sales team to gain an accurate understanding of customer needs and market expectations.',
      description2: 'This collaborative approach ensures that each flavor solution reflects the customer\'s intended concept, product positioning, and brand image.',
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
          items: ['Apple', 'Banana', 'Watermelon', 'Melon', 'Grape', 'Passionfruit', 'Pineapple', 'Mango', 'Coconut'],
        },
        nut: {
          name: 'Nut & Cocoa',
          icon: '🌰',
          items: ['Peanut', 'Hazelnut', 'Cocoa Butter', 'Cocoa', 'Chocolate'],
        },
        beverage: {
          name: 'Beverage & Liquor',
          icon: '☕',
          items: ['Coffee', 'Malt', 'Wine', 'Brandy', 'Beer', 'Chinese Hard Liquor'],
        },
        dairy: {
          name: 'Dairy & Cream',
          icon: '🥛',
          items: ['Milk', 'Cream', 'Butter', 'Custard', 'Egg', 'Vanilla'],
        },
        specialty: {
          name: 'Specialty Flavors',
          icon: '🌿',
          items: ['Green Bean', 'Red Bean', 'Mint', 'Cola', 'Taro', 'Ginseng', 'Sesame'],
        },
      },
    },

    // Applications
    applications: {
      badge: 'Application Range',
      title: 'Industry Applications',
      subtitle: 'Our flavors are widely used across multiple industries.',
      categories: [
        {
          name: 'Confectionery',
          icon: '🍬',
          items: ['Chocolate', 'Chewing Candy', 'Gum', 'Jellies'],
        },
        {
          name: 'Beverages',
          icon: '🥤',
          items: ['Tea', 'Juice', 'Powder Drinks', 'Smoothies', 'Flavoured Milk', 'Yoghurt'],
        },
        {
          name: 'Bakery',
          icon: '🍰',
          items: ['Crackers', 'Cakes', 'Cookies', 'Pies', 'Sandwich Biscuits'],
        },
        {
          name: 'Oral Care & Functional',
          icon: '🦷',
          items: ['Toothpaste', 'Functional Chewing Gum', 'Mouthwash'],
        },
      ],
    },

    // Why Choose Us
    whyUs: {
      badge: 'Why Choose Us',
      title: 'Why Choose Epochal Aromatic?',
      subtitle: 'We are committed to delivering innovative, safe, and reliable flavor solutions.',
      reasons: [
        { icon: '🔬', title: 'Specialized R&D', desc: 'Dedicated research team with deep expertise in flavor science' },
        { icon: '🎨', title: 'Custom Development', desc: 'Tailored flavor solutions designed for your unique products' },
        { icon: '⚡', title: 'Flexible Service', desc: 'Responsive and agile approach to meet tight timelines' },
        { icon: '🛡️', title: 'Technical Support', desc: 'Experienced specialists for formulation and application guidance' },
        { icon: '🌿', title: 'Natural & Safe', desc: 'Commitment to safety, natural extracts, and clean label ingredients' },
        { icon: '🌍', title: 'Wide Experience', desc: 'Proven track record across confectionery, beverages, bakery, and more' },
      ],
      healthBadge: 'Health & Natural Ingredients',
      healthTitle: 'Commitment to Natural Quality',
      healthDesc: 'With the rapid growth of the health food market, we continuously invest in research and innovation to develop safe and reliable flavor systems, natural extracts, and fresh, authentic aroma profiles.',
      healthPoints: [
        'Safe and reliable flavor systems',
        'Natural extracts (green tea, lemon tea, fruit extracts, milk notes)',
        'Fresh and authentic aroma profiles for bakery and beverage',
        'Natural and high-value flavor materials',
      ],
      visionTitle: 'Our Vision',
      visionDesc: 'To respond to the increasingly diversified needs of global consumers by delivering innovative, safe, and reliable flavor solutions that elevate product value.',
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
      desc: 'Professional Flavors & Fragrances enterprise delivering high-quality, safe, and innovative flavor solutions.',
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
      titleLine1: '上海时代',
      titleLine2: '芳香有限公司',
      subtitle: '一家专业的香精香料企业，致力于提供高品质、安全、创新的香精解决方案。凭借专业的研发团队和经验丰富的技术支持专家，我们为不同行业提供量身定制的香精开发服务。',
      cta1: '探索产品',
      cta2: '了解更多',
      stat1Value: '50+',
      stat1Label: '香精品种',
      stat2Value: '7+',
      stat2Label: '行业领域',
      stat3Value: '100%',
      stat3Label: '天然原料',
      motto: '您的成功就是我们的使命',
    },

    // About / Expertise
    about: {
      badge: '核心优势',
      title: '研发与客户\n协同合作',
      description: '我们的研发中心与销售团队紧密合作，准确理解客户需求和市场期望。',
      description2: '这种协同合作方式确保每一个香精解决方案都能体现客户的产品概念、市场定位和品牌形象。',
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
      badge: '产品系列',
      title: '甜味香精系列',
      subtitle: '全面的优质香精系列，采用天然原料精心制作，适用于多种应用场景。',
      categories: {
        citrus: {
          name: '柑橘类',
          icon: '🍊',
          items: ['柠檬', '橘子', '青柠', '西柚', '橙子'],
        },
        berry: {
          name: '莓果类',
          icon: '🍓',
          items: ['草莓', '蓝莓', '黑加仑', '黑莓'],
        },
        fruit: {
          name: '水果类',
          icon: '🍍',
          items: ['苹果', '香蕉', '西瓜', '甜瓜', '葡萄', '百香果', '菠萝', '芒果', '椰子'],
        },
        nut: {
          name: '坚果可可类',
          icon: '🌰',
          items: ['花生', '榛子', '可可脂', '可可', '巧克力'],
        },
        beverage: {
          name: '饮料酒类',
          icon: '☕',
          items: ['咖啡', '麦芽', '葡萄酒', '白兰地', '啤酒', '白酒'],
        },
        dairy: {
          name: '乳品奶油类',
          icon: '🥛',
          items: ['牛奶', '奶油', '黄油', '蛋奶', '鸡蛋', '香草'],
        },
        specialty: {
          name: '特色风味',
          icon: '🌿',
          items: ['绿豆', '红豆', '薄荷', '可乐', '芋头', '人参', '芝麻'],
        },
      },
    },

    // Applications
    applications: {
      badge: '应用领域',
      title: '行业应用',
      subtitle: '我们的香精广泛应用于多个行业领域。',
      categories: [
        {
          name: '糖果',
          icon: '🍬',
          items: ['巧克力', '奶糖', '口香糖', '果冻'],
        },
        {
          name: '饮料',
          icon: '🥤',
          items: ['茶饮', '果汁', '冲饮粉', '奶昔', '调味乳', '酸奶'],
        },
        {
          name: '烘焙',
          icon: '🍰',
          items: ['饼干', '蛋糕', '曲奇', '派', '夹心饼干'],
        },
        {
          name: '口腔护理及功能性产品',
          icon: '🦷',
          items: ['牙膏', '功能性口香糖', '漱口水'],
        },
      ],
    },

    // Why Choose Us
    whyUs: {
      badge: '选择我们',
      title: '为什么选择时代芳香？',
      subtitle: '我们致力于提供创新、安全、可靠的香精解决方案。',
      reasons: [
        { icon: '🔬', title: '专业研发', desc: '专注于香精科学的专业研究团队' },
        { icon: '🎨', title: '定制开发', desc: '为您的独特产品量身定制香精方案' },
        { icon: '⚡', title: '灵活服务', desc: '快速响应，满足紧迫的时间要求' },
        { icon: '🛡️', title: '技术支持', desc: '经验丰富的配方和应用指导专家' },
        { icon: '🌿', title: '天然安全', desc: '坚持安全、天然提取物和清洁标签原料' },
        { icon: '🌍', title: '丰富经验', desc: '在糖果、饮料、烘焙等领域拥有良好的业绩' },
      ],
      healthBadge: '健康与天然原料',
      healthTitle: '对天然品质的承诺',
      healthDesc: '随着健康食品市场的快速增长，我们持续投入研究和创新，开发安全可靠的香精体系、天然提取物以及新鲜、真实的香气特征。',
      healthPoints: [
        '安全可靠的香精体系',
        '天然提取物（绿茶、柠檬茶、水果提取物、奶香等）',
        '烘焙和饮料应用的清新真实香气',
        '天然高价值香精原料',
      ],
      visionTitle: '我们的愿景',
      visionDesc: '响应全球消费者日益多样化的需求，提供创新、安全、可靠的香精解决方案，提升产品价值。',
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
      addressVal: '中国上海',
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
      desc: '专业的香精香料企业，致力于提供高品质、安全、创新的香精解决方案。',
      quickLinks: '快速链接',
      products: '产品系列',
      stayUpdated: '订阅更新',
      newsletterDesc: '订阅获取最新香精产品、行业资讯和公司动态。',
      emailPlaceholder: '您的邮箱',
      copyright: '© {year} 上海时代芳香有限公司 版权所有',
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
