import streamlit as st
from ydata_profiling import ProfileReport
import pandas as pd
from streamlit_pandas_profiling import st_profile_report
train = pd.read_csv('./demo_data/train.csv')

profile = ProfileReport(train)
st_profile_report(profile)
