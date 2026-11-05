# Philip Kim | 강의·연구·산업 분석 자료

이 저장소는 AI, 온디바이스 AI, DVS, AI 수학, 반도체 및 산업 분석 강의·보고서를 모아 둔 웹사이트입니다. 강의 및 분석용 HTML 자료를 학습 순서에 맞춰 개별 웹 링크로 정리했습니다.

> 아래 표에서 `웹페이지 열기`를 누르면 GitHub 소스 코드가 아닌, 실제 웹페이지가 열립니다. 새 탭으로 열려면 Mac에서는 `⌘ + 클릭`, Windows에서는 `Ctrl + 클릭`을 이용하세요.

## 바로가기

- [전체 웹사이트 첫 화면](https://philipdekim-ond01.github.io/obsidian-blog/)
- [사이트 시작 페이지 (index.html)](https://philipdekim-ond01.github.io/obsidian-blog/index.html)

### 추천 학습 순서

기초부터 차례대로 배우려면 다음 흐름을 권장합니다.

1. **AI 수학 기초**: 함수·벡터·행렬·미분·역전파·Softmax를 이해합니다.
2. **퍼셉트론의 탄생 (1958)**: Frank Rosenblatt의 심리학·K-coefficient 박사학위 논문·EPAC와 퍼셉트론 원전을 학습합니다.
3. **머신러닝 코드 실습**: 퍼셉트론, 경사하강법, 회귀, Softmax, MNIST의 7개 예제를 Python 코드로 익힙니다.
4. **역전파 수학적 기원 (1960)**: Henry J. Kelley의 Solar Sail 비행시간 최적화에서 수반방정식(Adjoint Equation)과 기울기 역방향 계산의 필요성을 이해합니다.
5. **신경망 역전파의 발전 (1974/1982)**: Paul Werbos의 논문을 통해 퍼셉트론의 한계, 손실함수, 미분의 연쇄법칙과 가중치 수정을 이해합니다.
6. **역전파의 실용화와 신경망의 부활 (1986)**: Geoffrey Hinton·Rumelhart·Williams의 Nature 논문을 통해 은닉층 학습, 오차의 역전파, 내부 표현 학습을 이해합니다. [18장 편집형 강의 보기](https://philipdekim-ond01.github.io/obsidian-blog/hinton-1986-backprop-editable-16x9.html)
7. **신경망·딥러닝 기초**: 24장 강의로 히든층·ReLU·역전파·CNN·DenseNet을 연결합니다.
8. **온디바이스 AI 강좌**: Raspberry Pi 5의 OS·Wi-Fi·SSH·카메라 환경을 구축한 뒤 TFLite 가위바위보 추론을 실습하고, 모델 경량화·QAT로 확장합니다.
9. **AI 반도체 제품 경쟁력과 설계 최적화**: 시장 전망 → 상품기획·로드맵 → 개발·수율 → Accuracy·Throughput·PPAC → DTCO·STCO·2.5D/3D 패키징 순서로 학습합니다. [21장 그림 강의 보기](https://philipdekim-ond01.github.io/obsidian-blog/ai-semiconductor-competitive-product-21slides.html)
10. **DVS OnDevice AI**: 센서 데이터 수신부터 실시간 AI 처리까지 확장합니다.

## AI 수학 기초 · 전체 15개 HTML 페이지

| 학습 자료 | 웹페이지 |
|---|---|
| 00 · AI 수학 학습 지도 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/00-ai-math-map.html) |
| 01 · 함수와 그래프 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/01-functions-graphs.html) |
| 02 · 벡터와 내적 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/02-vectors-dot-product.html) |
| 03 · 행렬곱과 신경망 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/03-matrix-multiplication-neural-network.html) |
| 04 · 선형변환 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/04-linear-transform.html) |
| 05 · 미분과 연쇄법칙 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/05-derivative-chain-rule.html) |
| 06 · 기울기와 역전파 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/06-gradient-backpropagation.html) |
| 07 · 경사하강법 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/07-gradient-descent.html) |
| 08 · 확률과 Softmax | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/08-probability-softmax.html) |
| 09 · 통계와 전처리 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/09-statistics-preprocessing.html) |
| 10 · 엔트로피와 교차엔트로피 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/10-entropy-cross-entropy.html) |
| 11 · 어텐션 수식 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/11-attention-equation.html) |
| 12 · 작은 신경망 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/12-tiny-neural-network.html) |
| AI 수학 기초 종합 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/ai-math-foundations.html) |
| AI 수학 강의 목차 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-math/index.html) |

## 머신러닝 Python 코드 실습 · 7개 예제 / 80장 편집형 슬라이드

7개 Jupyter Notebook의 코드 흐름을 따라가며 퍼셉트론부터 MNIST까지 학습하는 강의자료입니다. 각 HTML은 16:9 화면, 코드별 쉬운 해설, 텍스트 직접 편집, 슬라이드 추가·복제·삭제, 수정본 HTML 저장과 PDF 인쇄를 지원합니다. 강의자료의 편집 내용은 각자의 브라우저 또는 다운로드한 파일에만 반영되며 GitHub 원본은 변경되지 않습니다.

| 실습 | 강의자료 | 핵심 개념 | 분량 |
|---|---|---|---|
| 전체 목차 | [7개 실습 통합 목차](https://philipdekim-ond01.github.io/obsidian-blog/ml-code-lectures/index.html) | 학습 순서와 개별 강의 바로가기 | 7개 |
| EX 01 | [퍼셉트론](https://philipdekim-ond01.github.io/obsidian-blog/ml-code-lectures/EX_01_Perceptron_editable_16x9.html) | 입력, 가중치, 편향, 활성화 함수 | 9장 |
| EX 02 | [가설함수 최적화](https://philipdekim-ond01.github.io/obsidian-blog/ml-code-lectures/EX_02_Optimize_Hypothesis_editable_16x9.html) | MSE, 경사하강법, 학습률 | 10장 |
| EX 03 | [혈압 선형회귀](https://philipdekim-ond01.github.io/obsidian-blog/ml-code-lectures/EX_03_Blood_Pressure_Linear_Regression_editable_16x9.html) | 혈압 예측, 회귀계수, 오차 해석 | 11장 |
| EX 04 | [Keras 다중 입력·다중 출력](https://philipdekim-ond01.github.io/obsidian-blog/ml-code-lectures/EX_04_Multi_Input_Multi_Output_Keras_editable_16x9.html) | 여러 입력 변수와 여러 출력 동시 예측 | 11장 |
| EX 05 | [로지스틱 회귀](https://philipdekim-ond01.github.io/obsidian-blog/ml-code-lectures/EX_05_Logistic_Regression_editable_16x9.html) | Sigmoid, 확률, 이진 분류 | 11장 |
| EX 06 | [Softmax 분류](https://philipdekim-ond01.github.io/obsidian-blog/ml-code-lectures/EX_06_Softmax_Classification_editable_16x9.html) | 3개 클래스 예측, 분류 정확도 | 13장 |
| EX 07 | [MNIST 숫자 분류](https://philipdekim-ond01.github.io/obsidian-blog/ml-code-lectures/EX_07_MNIST_Classification_editable_16x9.html) | Keras 신경망, 학습·평가, 일반화 | 15장 |

## 신경망 발전사 · 5편 연속 강의 (연대순)

퍼셉트론의 탄생(1958) → 역전파 계산의 수학적 기원(1960) → 신경망 학습법의 발전(1974/1982) → 다층 신경망 학습의 실용화(1986) → 현대 신경망·CNN·DenseNet으로 이어지는 다섯 편입니다. 아래 순서대로 학습하면 기술이 등장한 이유와 각 논문의 차이를 이해하기 쉽습니다.

| 순서 | 강의자료 | 웹페이지 | 핵심 학습 내용 |
|---|---|---|---|
| 1강 · 1958 | Frank Rosenblatt · 퍼셉트론 원전 (24장, 편집형) | [강의 슬라이드 열기](https://philipdekim-ond01.github.io/obsidian-blog/rosenblatt-1958-perceptron-editable-16x9.html) | 퍼셉트론의 탄생, S–A–R 구조, 가중치 학습, 통계적 분리와 일반화 |
| 2강 · 1960 | Henry J. Kelley · 최적 비행경로와 역전파의 수학적 기원 (25장, 편집형) | [강의 슬라이드 열기](https://philipdekim-ond01.github.io/obsidian-blog/kelley-1960-solar-sail-backprop-editable-16x9.html) | Solar Sail, 최적 비행경로, 수반방정식, 역방향 기울기 계산과 반도체 응용 |
| 3강 · 1974/1982 | Paul Werbos · 신경망 역전파의 발전 (22장, 편집형) | [강의 슬라이드 열기](https://philipdekim-ond01.github.io/obsidian-blog/werbos-backprop-1974-1982-editable-16x9.html) | 다층 신경망, 손실함수, 미분의 연쇄법칙, 가중치 업데이트와 불량 예측 |
| 4강 · 1986 | Geoffrey Hinton · Nature 역전파 실용화 (18장, 편집형) | [강의 슬라이드 열기](https://philipdekim-ond01.github.io/obsidian-blog/hinton-1986-backprop-editable-16x9.html) | 전공·이력·연구 동기, 은닉층과 XOR, 오차 역전파, 대칭·가족관계 실험, 가중치 학습 실습 |
| 5강 · 이후 발전 | 신경망 기초 · 역전파에서 DenseNet까지 (24장, 편집형) | [강의 슬라이드 열기](https://philipdekim-ond01.github.io/obsidian-blog/neural-network-backprop-cnn-densenet-editable-16x9.html) | 은닉층, ReLU, Softmax, 역전파·경사하강법, CNN·DenseNet, 반도체 불량 사례 |

## 온디바이스 AI 강좌

| 자료 | 웹페이지 | 내용 |
|---|---|---|
| 00 · 전체 학습 지도 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ondevice-ai-00-overview.html) | Raspberry Pi, TFLite, 전이학습, 경량화를 한눈에 |
| 실습 준비 · Raspberry Pi 5 환경 구축 및 TFLite 가위바위보 (30장, 편집형) | [강의 슬라이드 열기](https://philipdekim-ond01.github.io/obsidian-blog/ondevice-ai-06-raspberry-pi5-setup-rps-tflite-30slides.html) | OS 설치 → Yonsei Wi-Fi → SSH → Python 가상환경 → USB 카메라 → DenseNet·TFLite 가위바위보 실행, 오류 해결 및 실습 점검 |
| 01 · TFLite 가위바위보 인식 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ondevice-ai-01-rps-tflite.html) | 카메라 입력부터 추론·후처리까지 |
| 02 · 전이학습 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ondevice-ai-02-transfer-learning.html) | ResNet 분류와 Tiny YOLO 객체탐지 |
| 03 · Quantization과 Pruning | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ondevice-ai-03-lightweighting.html) | 모델 크기·추론 속도·정확도 균형 |
| 04 · RPS QAT 기초 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ondevice-ai-04-lightweighting-qat-beginner.html) | DenseNet121, QAT, TFLite 변환 |
| 05 · ResNet RPS QAT 비교 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ondevice-ai-05-resnet-rps-qat.html) | ResNet50과 DenseNet121 비교 |
| 온디바이스 AI 경량화 세션 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ondevice-ai-lightweighting-session.html) | PTQ·QAT·Pruning·Clustering |
| AI반도체설계혁신특론 핵심 복습 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-semiconductor-course-review-ondevice-lightweighting.html) | 선형대수부터 경량화까지 |
| Raspberry Pi SSD 객체탐지 실습 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/rsp-ssd-lab-raspberry-pi-object-detection.html) | SSD 실습과 성능 비교 |
| GCP + VSCode RPS QAT 실습 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/gcp-vscode-rps-qat-lab.html) | GPU 서버 연결과 실습 절차 |
| 학생을 위한 GitHub 활용 가이드 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/student-github-guide.html) | 가입·Fork·Colab·프로젝트 업로드 |

## AI 반도체설계혁신특론 · 제품 경쟁력 강의

온디바이스 AI의 정확도·속도·전력 효율을 학습한 다음, 실제 AI 반도체가 시장에서 성공하기까지의 개발·설계·공정·패키징을 연결해 이해하는 강의입니다. 아래 순서대로 읽으면 기술 개념을 외우기보다 등장 배경과 역할을 이해할 수 있습니다.

| 순서 | 강의자료 | 핵심 내용 | 형식 |
|---|---|---|---|
| 01 · 선행 복습 | [AI반도체설계혁신특론 핵심 복습](https://philipdekim-ond01.github.io/obsidian-blog/ai-semiconductor-course-review-ondevice-lightweighting.html) | AI 수학 → ML/DL → 온디바이스 경량화 | HTML |
| 02 · 제품 경쟁력 | [AI 반도체는 어떻게 경쟁력 있는 제품이 되는가?](https://philipdekim-ond01.github.io/obsidian-blog/ai-semiconductor-competitive-product-21slides.html) | AI Super Cycle → 상품기획 → Technology Roadmap → 연구·개발·양산 → 수율 → Accuracy·Throughput → PPAC → DTCO → GAA·BSPDN → STCO → 2.5D/3D·방열 | 그림 포함 16:9 슬라이드 21장 |

강사: 김임환 삼성전자 산학교수. 슬라이드는 화면에서 넘겨볼 수 있고, 내용 편집·HTML 저장·PDF 인쇄 기능을 지원합니다. 편집 결과는 원본 저장소에 자동 반영되지 않습니다.

## DVS OnDevice AI · 전체 34개 HTML 페이지

폴더 목차뿐 아니라 Raspberry Pi 5 아키텍처, 알고리즘, 대시보드 및 개별 재생 화면까지 직접 연결했습니다.

| 강의·실습 | 웹페이지 |
|---|---|
| BIN 파일과 코드 아키텍처 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/bin-code-architecture.html) |
| DVS 카메라 대시보드 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/dashboard.html) |
| 이벤트 합성 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/event-synthesis.html) |
| 낙상 감지 기획 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/fall-plan.html) |
| DVS 강의·실습 전체 목차 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/index.html) |
| 사람 인식 결과 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/person.html) |
| Raspberry Pi 5 구조·성능·인터페이스 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/raspberry-pi5-architecture.html) |
| 실시간 이벤트 합성 알고리즘 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/realtime-synthesis-algorithm.html) |
| 우주·엣지 AI 제안 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/space-edge-proposal.html) |
| 합성 DVS 이벤트 그리드 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/synthetic-grid.html) |

### DVS 합성 이벤트 재생 기록 (24개)

실험별 독립 HTML 재생 화면입니다.

| 기록 시각 (2026-07-28) | 웹페이지 |
|---|---|
| 16:24:09 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_162409.html) |
| 16:24:44 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_162444.html) |
| 16:25:19 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_162519.html) |
| 16:25:54 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_162554.html) |
| 16:26:30 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_162630.html) |
| 16:27:05 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_162705.html) |
| 16:27:40 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_162740.html) |
| 16:28:15 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_162815.html) |
| 16:28:50 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_162850.html) |
| 16:29:26 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_162926.html) |
| 16:30:00 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_163000.html) |
| 16:42:45 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_164245.html) |
| 17:03:17 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_170317.html) |
| 17:03:52 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_170352.html) |
| 17:04:28 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_170428.html) |
| 17:05:02 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_170502.html) |
| 17:13:08 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_171308.html) |
| 17:13:43 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_171343.html) |
| 17:15:45 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_171545.html) |
| 17:19:51 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_171951.html) |
| 17:20:25 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_172025.html) |
| 17:31:17 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_173117.html) |
| 17:31:52 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_173152.html) |
| 17:32:27 · 합성 이벤트 재생 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/dvs-ondevice-ai/play-20260728_173227.html) |

## AI 기술·산업 분석

| 자료 | 웹페이지 | 내용 |
|---|---|---|
| AI Search에서 Agent·Personal AI로 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-search-agent-personal-ai-transition-20260610.html) | 검색에서 개인 AI로의 전환 |
| AI 반도체 밸류체인과 수요 성장 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-semiconductor-value-chain-demand-growth-anthropic-20260531.html) | AI 수요와 CPU·메모리·패키징 병목 |
| Cerebras 기업·기술 비교 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/cerebras-company-history-scale-tech-comparison-20260531.html) | Wafer-Scale Engine과 경쟁 구도 |
| Edge AI·온프레미스·피지컬 AI | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/edge-ai-onprem-physical-ai-expansion-202605.html) | 현장 AI와 반도체 인프라 변화 |
| AI 데이터센터 전력·에너지 병목 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/ai-datacenter-power-bottleneck-energy-infra-202605.html) | 전력·냉각·그리드 제약 |
| GB300에서 VR200으로: AI Rack BOM | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/gb300-vr200-ai-rack-bom-insight.html) | AI 랙의 구성과 산업 변화 |
| 우주산업·Starcloud 데이터센터 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/space-industry-starcloud-orbital-ai-datacenter-202605.html) | 우주 AI 인프라와 관련 산업 |
| Jones–Tonetti AI 자동화·성장 논문 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/jones-tonetti-ai-automation-growth-weak-links-2026.html) | 자동화·약한 고리·성장 해설 |
| OpenAI LLM 경제성 시나리오 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/openai-llm-economics-scenario-report.html) | 학습·추론 비용 구조 |

## 반도체·메모리 시장과 기타 분석

| 자료 | 웹페이지 | 내용 |
|---|---|---|
| 2026 글로벌 반도체 시장 요약 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/global-semi-market-summary-202605.html) | 메모리 중심 시장 변화 |
| Memory Market 2025–2027 (개정판) | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/memory-market-2025-2027-insight-report-v2.html) | DRAM·NAND·HBM 전망 및 경쟁 분석 |
| Memory Market 2025–2027 (기존판) | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/memory-market-2025-2027-insight-report.html) | 메모리 시장 분석 원본 |
| Application별 반도체 매출 검증 | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/application-semiconductor-revenue-validation.html) | 응용 분야별 반도체 비중 |
| 왜 일본 제국은 실패하였는가? | [웹페이지 열기](https://philipdekim-ond01.github.io/obsidian-blog/why-japanese-empire-failed.html) | 조직의 실패·학습·적응 |

## GitHub 파일과 웹페이지의 차이

- 저장소의 `.html` 파일명을 직접 누르면 GitHub가 HTML 소스 코드를 표시합니다. GitHub 기본 동작이므로 변경할 수 없습니다.
- 위의 `웹페이지 열기` 링크를 누르면 GitHub Pages에 게시된 실제 화면으로 이동합니다.
- 새 HTML 자료가 추가되면 `index.html`과 이 `README.md`에도 링크를 추가하면 찾기 쉽습니다.

---

이 자료의 웹페이지 시작점: [obsidian-blog 홈](https://philipdekim-ond01.github.io/obsidian-blog/)
