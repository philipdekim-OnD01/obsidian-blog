# 머신러닝 모델별 특성 실습

김임환의 「머신러닝 모델별 특성」 강의와 연결된 실습 패키지입니다.

## 가장 빠른 실행

[Google Colab에서 전체 실습 열기](https://colab.research.google.com/github/philipdekim-OnD01/obsidian-blog/blob/main/ml-model-practice/ml_models_practice.ipynb)

Colab에서는 별도 파일 업로드 없이 GitHub의 CSV를 직접 읽습니다.

## Python 코드

| 순서 | 코드 | 내용 | 직접 다운로드 |
|---|---|---|---|
| 00 | [전체 모델 비교](./00_all_models.py) | Wine 5개 분류 모델 + House 선형회귀 | [다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/00_all_models.py) |
| 01 | [KNN](./01_knn.py) | 거리 기반 분류 | [다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/01_knn.py) |
| 02 | [선형회귀](./02_linear_regression.py) | 연속값 예측 | [다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/02_linear_regression.py) |
| 03 | [로지스틱 회귀](./03_logistic_regression.py) | 확률 기반 선형 분류 | [다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/03_logistic_regression.py) |
| 04 | [나이브 베이즈](./04_naive_bayes.py) | 조건부 확률 기반 분류 | [다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/04_naive_bayes.py) |
| 05 | [의사결정나무](./05_decision_tree.py) | 규칙 기반 분류 | [다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/05_decision_tree.py) |
| 06 | [SVM](./06_svm.py) | 최대 마진 기반 분류 | [다운로드](https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/06_svm.py) |

## 데이터

업로드된 강의용 데이터는 모두 `data/`에 보관했습니다.

- wine_data.csv
- house_prices.csv
- iris.csv
- iris_without_y.csv
- heart.csv
- badminton_dataset.csv
- performance.csv
- sales.csv
- sales1.csv
- sales2.csv
- sales3.csv
- air_quality_uci.csv

## 로컬 실행

```bash
git clone https://github.com/philipdekim-OnD01/obsidian-blog.git
cd obsidian-blog/ml-model-practice
pip install -r requirements.txt
python 00_all_models.py
```

각 Python 파일은 저장소를 clone한 경우 로컬 `data/`를 먼저 사용하고, 코드 파일만 별도로 받은 경우에는 GitHub의 raw CSV를 자동으로 읽습니다.
