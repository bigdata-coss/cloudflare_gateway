export function renderHtml(content: string) {
  return `
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ELP - Enterprise Learning Platform</title>
        <link rel="stylesheet" type="text/css" href="https://static.integrations.cloudflare.com/styles.css">
        <style>
          body {
            font-family: 'Noto Sans KR', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          header {
            text-align: center;
            padding: 40px 0;
            background: linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC);
            color: white;
            border-radius: 8px;
            margin: 20px 0;
          }
          .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin: 40px 0;
          }
          .feature-card {
            background: #f9f9f9;
            border-radius: 8px;
            padding: 25px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }
          .feature-card:hover {
            transform: translateY(-5px);
          }
          .feature-card h3 {
            color: #0052D4;
            margin-top: 0;
          }
          .cta-section {
            text-align: center;
            margin: 60px 0;
            padding: 40px;
            background: #f0f8ff;
            border-radius: 8px;
          }
          .cta-button {
            display: inline-block;
            background: #0052D4;
            color: white;
            padding: 12px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 20px;
            transition: background 0.3s ease;
          }
          .cta-button:hover {
            background: #003cb9;
          }
          footer {
            text-align: center;
            padding: 30px 0;
            margin-top: 40px;
            border-top: 1px solid #eee;
            color: #666;
          }
          .api-data {
            background: #f5f5f5;
            padding: 20px;
            border-radius: 8px;
            margin: 30px 0;
          }
          .api-data h3 {
            margin-top: 0;
            color: #0052D4;
          }
        </style>
      </head>
    
      <body>
        <header>
          <h1>ELP - Enterprise Learning Platform</h1>
          <p>기업 맞춤형 교육 플랫폼으로 직원들의 역량을 강화하세요</p>
        </header>
        <main>
          <section class="features">
            <div class="feature-card">
              <h3>맞춤형 학습 경로</h3>
              <p>각 직원의 역할과 목표에 맞는 개인화된 학습 경로를 제공합니다.</p>
            </div>
            <div class="feature-card">
              <h3>실시간 분석</h3>
              <p>학습 진행 상황과 성과를 실시간으로 추적하고 분석합니다.</p>
            </div>
            <div class="feature-card">
              <h3>다양한 콘텐츠</h3>
              <p>비디오, 인터랙티브 퀴즈, 문서 등 다양한 형태의 학습 자료를 제공합니다.</p>
            </div>
          </section>
          
          <div class="api-data">
            <h3>API 데이터 예시</h3>
            <pre><code>${content}</code></pre>
          </div>
          
          <section class="cta-section">
            <h2>지금 바로 시작하세요</h2>
            <p>ELP와 함께 기업의 교육 시스템을 혁신하세요.</p>
            <a href="#" class="cta-button">무료 데모 신청하기</a>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 ELP - Enterprise Learning Platform. All rights reserved.</p>
        </footer>
      </body>
    </html>
`;
}
