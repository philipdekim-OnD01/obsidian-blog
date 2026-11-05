# 머신러닝 모델별 특성 실습

김임환의 「머신러닝 모델별 특성」 강의와 연결된 실습 패키지입니다.

## 바로 시작

- [실습 안내 웹페이지](https://philipdekim-ond01.github.io/obsidian-blog/ml-model-practice/index.html)
- [Google Colab에서 전체 실습 바로 실행](https://colab.research.google.com/github/philipdekim-OnD01/obsidian-blog/blob/main/ml-model-practice/ml_models_practice.ipynb)
- [강의자료](https://philipdekim-ond01.github.io/obsidian-blog/ml-model-characteristics-editable.html)

Colab은 GitHub의 CSV를 직접 읽기 때문에 별도 파일 업로드가 필요 없습니다.

## Python 코드

| 순서 | 코드 | 핵심 내용 | 다운로드 |
|---|---|---|---|
| 00 | [00_all_models.py](./00_all_models.py) | Wine 5개 분류 모델 + House 선형회귀 전체 비교 | [Raw](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/00_all_models.py) |
| 01 | [01_knn.py](./01_knn.py) | KNN: 거리와 표준화 | [Raw](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/01_knn.py) |
| 02 | [02_linear_regression.py](./02_linear_regression.py) | 선형회귀: RMSE·R² | [Raw](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/02_linear_regression.py) |
| 03 | [03_logistic_regression.py](./03_logistic_regression.py) | 로지스틱 회귀: 확률 기반 분류 | [Raw](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/03_logistic_regression.py) |
| 04 | [04_naive_bayes.py](./04_naive_bayes.py) | 나이브 베이즈: 조건부 확률 | [Raw](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/04_naive_bayes.py) |
| 05 | [05_decision_tree.py](./05_decision_tree.py) | 의사결정나무: 규칙 분기·과적합 | [Raw](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/05_decision_tree.py) |
| 06 | [06_svm.py](./06_svm.py) | SVM: 마진·스케일링·커널 | [Raw](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/06_svm.py) |

## 실습 데이터

| 데이터 | 크기 | 무엇을 예측/분석하나 | 추천 실습 | 다운로드 |
|---|---:|---|---|---|
| [wine_data.csv](./data/wine_data.csv) | 178×14 | 와인의 화학 성분 → class | KNN · 로지스틱 · NB · Tree · SVM | [Raw 다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/wine_data.csv) |
| [house_prices.csv](./data/house_prices.csv) | 506×14 | 주택 특성 → MEDV | 선형회귀 | [Raw 다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/house_prices.csv) |
| [iris.csv](./data/iris.csv) | 150×5 | 꽃 특성 → class | 분류 모델 비교 | [Raw 다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/iris.csv) |
| [iris_without_y.csv](./data/iris_without_y.csv) | 150×4 | 정답이 없는 붓꽃 입력 | 학습 모델의 새 데이터 예측 | [Raw 다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/iris_without_y.csv) |
| [heart.csv](./data/heart.csv) | 303×14 | 임상 특성 → target | 이진 분류 | [Raw 다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/heart.csv) |
| [badminton_dataset.csv](./data/badminton_dataset.csv) | 36×5 | 날씨 조건 → Play_Badminton | 의사결정나무·규칙 | [Raw 다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/badminton_dataset.csv) |
| [performance.csv](./data/performance.csv) | 1000×7 | 교육·훈련·역량·태도·성과 | EDA·회귀 확장 | [Raw 다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/performance.csv) |
| [sales.csv](./data/sales.csv) | 1000×17 | 고객·상품·매출·결제·평점 | EDA·회귀·분류 확장 | [Raw 다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/sales.csv) |
| [sales1.csv](./data/sales1.csv) | 1000×5 | 고객·구매 기본 속성 | 범주형 전처리 | [Raw 다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/sales1.csv) |
| [sales2.csv](./data/sales2.csv) | 1000×6 | 상품·단가·수량·총액 | 가격·회귀 분석 | [Raw 다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/sales2.csv) |
| [sales3.csv](./data/sales3.csv) | 1000×8 | 날짜·결제·마진·평점 | 시계열·회귀 확장 | [Raw 다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/sales3.csv) |
| [air_quality_uci.csv](./data/air_quality_uci.csv) | 1000×15 | 대기질 센서·온습도 | 센서 전처리·회귀 | [Raw 다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/air_quality_uci.csv) |

## 추천 학습 순서

1. Colab에서 `00_all_models.py`와 동일한 전체 실습을 먼저 실행합니다.
2. Wine 데이터에서 5개 분류 모델의 정확도를 비교합니다.
3. KNN·로지스틱·SVM에서 StandardScaler를 제거해 성능 변화를 확인합니다.
4. House 데이터에서 RMSE와 R²가 무엇을 의미하는지 해석합니다.
5. Iris·Heart·Badminton으로 데이터와 모델을 바꾸어 봅니다.
6. Sales·Air Quality는 전처리와 문제 정의를 학생이 직접 하도록 확장 과제로 사용합니다.

## 로컬 실행

```bash
git clone https://github.com/philipdekim-OnD01/obsidian-blog.git
cd obsidian-blog/ml-model-practice
pip install -r requirements.txt
python 00_all_models.py
```

각 Python 파일은 저장소를 clone한 경우 로컬 `data/`를 먼저 사용하고, 코드 파일만 따로 받은 경우 GitHub의 raw CSV를 자동으로 읽도록 구성했습니다.
