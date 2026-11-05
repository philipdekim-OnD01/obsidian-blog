"""
00. 머신러닝 모델 전체 비교 실습
KNN, 로지스틱 회귀, 나이브 베이즈, 의사결정나무, SVM + 선형회귀
김임환 머신러닝 모델별 특성 강의
"""

from pathlib import Path
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression, LinearRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, mean_squared_error, r2_score

RAW_BASE = "https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/"

def load_data(filename):
    local = Path(__file__).resolve().parent / "data" / filename
    source = local if local.exists() else RAW_BASE + filename
    return pd.read_csv(source)

print("\n[1] Wine 분류 모델 비교")
wine = load_data("wine_data.csv")
X = wine.drop(columns="class")
y = wine["class"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

models = {
    "KNN": make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5)),
    "Logistic Regression": make_pipeline(StandardScaler(), LogisticRegression(max_iter=2000)),
    "Naive Bayes": GaussianNB(),
    "Decision Tree": DecisionTreeClassifier(max_depth=4, random_state=42),
    "SVM": make_pipeline(StandardScaler(), SVC(kernel="rbf", C=1.0, gamma="scale")),
}

for name, model in models.items():
    model.fit(X_train, y_train)
    pred = model.predict(X_test)
    print(f"{name:20s} accuracy = {accuracy_score(y_test, pred):.4f}")

print("\n[2] House Price 선형회귀")
house = load_data("house_prices.csv")
X = house.drop(columns="MEDV")
y = house["MEDV"]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)
pred = model.predict(X_test)

print(f"RMSE = {mean_squared_error(y_test, pred) ** 0.5:.4f}")
print(f"R2   = {r2_score(y_test, pred):.4f}")
