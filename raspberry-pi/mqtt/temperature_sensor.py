import paho.mqtt.publish as publish
import paho.mqtt.client as mqtt
import random
import json
from sense_hat import SenseHat 
import subprocess
import time

class TemperatureSensor:
	MQTT_SERVER = "broker.hivemq.com"
	MQTT_PATH_TEMP = "atalantus/IoT-Weatherstation"
	ID = "raspberry_pi_temp_sender"
	temperature_factor = 0.875
		
	def __init__(self):
		self.sense = SenseHat()
		self.cpu_temp = 0
		self.sensor_temp = 0
		self.room_temp = 0
	
	def update_data(self):
		# cpu temperature
		cpu_temp_bytes = subprocess.check_output("vcgencmd measure_temp", shell=True).decode("utf-8")
		array = cpu_temp_bytes.split("=")
		array2 = array[1].split("'")
		self.cpu_temp = float(array2[0])
		
		# sensor temp
		self.sensor_temp = self.sense.get_temperature()
		
		# room temp
		self.room_temp = self.sensor_temp - ((self.cpu_temp - self.sensor_temp) / self.temperature_factor)
	
	def publish_data(self):
		self.update_data()
		msg = json.dumps({ 'cpu': self.cpu_temp, 'sensor': self.sensor_temp, 'room': self.room_temp, 'timestamp': int(time.time()) })
		print(msg)
		publish.single(self.MQTT_PATH_TEMP, msg, hostname=self.MQTT_SERVER)
		return msg
