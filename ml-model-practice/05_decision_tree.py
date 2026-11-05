"""
05. 의사결정나무 분류
김임환 머신러닝 모델별 특성 강의 실습
"""

from pathlib import Path
import pandas as pd

RAW_BASE = "https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/"

def load_data(filename):
    local = Path(__file__).resolve().parent / "data" / filename
    source = local if local.exists() else RAW_BASE + filename
    return pd.read_csv(source)

df = load_data("wine_data.csv")

from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.metrics import accuracy_score, classification_report

X = df.drop(columns="class")
y = df["class"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

model = DecisionTreeClassifier(max_depth=4, random_state=42)
model.fit(X_train, y_train)
pred = model.predict(X_test)

print("Decision Tree accuracy:", round(accuracy_score(y_test, pred), 4))
print(classification_report(y_test, pred))
print(export_text(model, feature_names=list(X.columns)))
