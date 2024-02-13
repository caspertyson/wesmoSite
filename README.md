# WESMO.co.nz

## Overview
WESMO.co.nz is a dedicated website for the Formula SAE (FSAE) club. This site has a unique combination 
of features inspired by two other website projects: a self-writing headline for dynamic content 
presentation and distinctive background and styling elements. One noteworthy feature is the live data 
logging capability that displays real-time data from the Formula SAE car, providing an immersive and 
engaging experience for users.

Built on an AWS EC2 instance, the website integrates several technologies including Grafana for data 
visualization, an MQTT broker for real-time data logging, a PostgreSQL database for data storage, a 
Python program for translating CAN bus data to string, and Apache to serve the site.

## Technologies Used
- **AWS EC2**: Hosts the website and the backend services.
- **Grafana**: Used for data visualization, particularly for the live data logging feature.
- **MQTT Broker**: Manages real-time messaging for live data updates.
- **PostgreSQL**: Stores data collected from the Formula SAE car.
- **Python**: Translates CAN bus data into readable strings for the website.
- **Apache**: Serves the website, ensuring it is accessible to users.

## Features
- **Self-Writing Headline**: Engages visitors with dynamic content presentation.
- **Live Data Logging**: Displays real-time data from the FSAE car, offering insights into its 
performance.
- **Unique Design**: Combines aesthetic elements from previous projects for a distinctive look and 
feel.
- **Interactive Data Visualization**: Utilizes Grafana for comprehensive and interactive data display.

## Getting Started

### Prerequisites
- AWS account and EC2 setup knowledge.
- Basic understanding of Grafana, MQTT, PostgreSQL, Python, and Apache.

### Setup
1. Launch an AWS EC2 instance suitable for hosting the required services (t3.micro or AWS's smallest 
VM should work).
2. Install Grafana, MQTT broker, PostgreSQL, and Apache on the EC2 instance.
3. Deploy the Python translation program on the EC2 instance to process CAN bus data.
4. Configure Apache to serve the WESMO.co.nz site.

## Contributing
We welcome contributions to the WESMO.co.nz website, whether it's new features, bug fixes, or 
improvements. To contribute:

1. Fork the repository (if applicable).
2. Create a new branch for your feature or fix (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## Contact
For questions, suggestions, or feedback regarding WESMO.co.nz, please reach out to me at 
[caspertyson99@gmail.com](mailto:caspertyson99@gmail.com).

## Acknowledgments
- The FSAE club and team members for their continuous support and inspiration.
- The community for the valuable feedback and compliments that motivate further development.


