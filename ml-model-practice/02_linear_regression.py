"""
02. 선형회귀
김임환 머신러닝 모델별 특성 강의 실습
"""

from pathlib import Path
import pandas as pd

RAW_BASE = "https://raw.githubusercontent.com/philipdekim-OnD01/obsidian-blog/main/ml-model-practice/data/"

def load_data(filename):
    local = Path(__file__).resolve().parent / "data" / filename
    source = local if local.exists() else RAW_BASE + filename
    return pd.read_csv(source)

df = load_data("house_prices.csv")

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

X = df.drop(columns="MEDV")
y = df["MEDV"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)
pred = model.predict(X_test)

rmse = mean_squared_error(y_test, pred) ** 0.5
r2 = r2_score(y_test, pred)

print("Linear Regression RMSE:", round(rmse, 4))
print("Linear Regression R2:", round(r2, 4))
