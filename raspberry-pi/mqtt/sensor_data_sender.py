import time
from temperature_sensor import TemperatureSensor
		
cur_temp_data = None	
temperature = TemperatureSensor()

while True:
	cur_temp_data = temperature.publish_data()
	time.sleep(30)
