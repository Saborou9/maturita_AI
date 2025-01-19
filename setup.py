from setuptools import setup, find_packages

setup(
    name="project-b",
    version="0.1",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    install_requires=[
        "Flask==3.0.3",
        "Flask-Cors==5.0.0",
        "Flask-JWT-Extended==4.6.0",
        "Flask-Login==0.6.3",
        "Flask-SQLAlchemy==3.1.1",
        "gunicorn==21.2.0",
    ],
    python_requires=">=3.9",
)
