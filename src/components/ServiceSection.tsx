import { Shield, Coffee, Wifi, Armchair } from "lucide-react";
import { motion } from "motion/react";

import "./ServiceSection.css";

export function ServiceSection() {
  const services = [
    {
      icon: Shield,
      title: "An toàn chuẩn 5 sao",
      image:
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/546107152_1208961634373974_7912001924818000482_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGME48F9NO9nIZ3bE3FCoXDiHUjDMG-UqCIdSMMwb5SoI6xURU7rdl4RPNe-SzKpYPMVrJgEZ4OM6JgWgu8385h&_nc_ohc=COGFwSD5sx0Q7kNvwEhauyu&_nc_oc=AdnxlDaZyFFb8jVSYoz_ewkJPQAuXEkRB9FNW_1aIsmr8S5A4sxr6qk9qxSBDARTg1k&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=FhOZfBw7WWAIJKOvSh5JrQ&oh=00_AfgACLPX0EN7tvQdCMHbzxqAfrXB7yCslDEKL8PRxfa6og&oe=69224A10",
      description: "Bảo hiểm hành khách đầy đủ, tài xế nhiều kinh nghiệm và kiểm tra xe định kỳ trước mỗi chuyến",
    },
    {
      icon: Armchair,
      title: "Giường nằm cao cấp",
      image:
          "https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/545507839_1208961584373979_7561166442684548467_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHmblYDDX9cgI-lI49z2g9u9Ldkifajzyf0t2SJ9qPPJ-lM8AbM8MTOKf8rge1nNPKcy4FprCw4EOkQxeuvohJ2&_nc_ohc=IlUCwv1E-RwQ7kNvwH5C7Fy&_nc_oc=Adm51-8gR9b0Gbyf3r28fMgUYx-Zm-OxnOyWhoXdeFDzrxc3oy4rmXxQcWbZbxC6yDA&_nc_zt=23&_nc_ht=scontent.fhan18-1.fna&_nc_gid=iRe8g3Nn1kOT3KSdjYXLJA&oh=00_AfjE6ddgKbma9qAaO4KJN29mJhE_ANsCngCX3_5G5aRI6Q&oe=692361D0",
      description: "Nệm da kháng khuẩn, rèm riêng tư, chăn gối sạch sẽ giúp bạn nghỉ ngơi thoải mái",
    },
    {
      icon: Wifi,
      title: "Wifi & sạc tiện lợi",
      image:
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/528152085_1181214270482044_2082145697686854411_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEUg8SqAnj1cod-PnXz8_2xOxHZ3aUbfT47EdndpRt9Put2zBRKwd96EtdkvLHVOKtYDhbO-FBD6S71vwLsqjo6&_nc_ohc=Hvuk4vOYc1AQ7kNvwGHOi9C&_nc_oc=AdlwY84VyfZggJX06LlpECyRLlB7xoZ5DJZvX3wjZDKJPPkbiySXhoQXWKEriTXwgOE&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=Jdi9_FaNbFhLv1FZPjOeWA&oh=00_Afj4vrea6jFcwEfyPNFktOxdzbYdP5P_XjCkc9C02TQX7A&oe=69225B5E",
      description: "Trang bị wifi miễn phí, cổng USB và điện thoại hỗ trợ suốt hành trình",
    },
    {
      icon: Coffee,
      title: "Nước uống - khăn lạnh",
      image:
        "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/539355485_1198959562040848_9198228117422014222_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGaPuFAwxFnGFbth200kBevhaETSgzlmUuFoRNKDOWZS9CEdNf5ohUbzEqip2RmBI1mb_v-8fUJV_ua_FA51P_M&_nc_ohc=C1RX9YdBMCkQ7kNvwF77e2G&_nc_oc=AdkwKUPgrdk4RmBXAy1ptmMSh7Psm-yZ60iiydosIujM0aABbFZtd8v2iQ-pkSP0lJY&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=8IX1S-8s95y0v1yussgM3g&oh=00_Afj7HG-4KpGzUkVXcNn_eAxxRW507e_hWuqV-xyOQJPHPg&oe=69221869",
      description: "Phục vụ nước suối, khăn lạnh và điểm dừng nghỉ hợp lý để bạn luôn tỉnh táo",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <h2 className="services-title">Tiện ích nổi bật</h2>
          <p className="services-description">
            Trải nghiệm chất lượng khác biệt với hệ thống xe đời mới và đội ngũ phục vụ tận tâm
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                {/* Image placeholder */}
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                  />
                </div>

                {/* Icon */}
                <div className="service-icon">
                  <Icon />
                </div>

                {/* Content */}
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
