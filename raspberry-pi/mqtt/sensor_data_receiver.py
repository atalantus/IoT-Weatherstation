import paho.mqtt.client as mqtt
import json

class SensorDataHandler:
	MQTT_SERVER = "broker.hivemq.com"
	MQTT_PATH_TEMP = "Public/THERESIE/OG5/PRINZESSIN/ENV/TEMP"

	def __init__(self):
		self.client = mqtt.Client()
		self.client.on_connect = self.on_connect
		self.client.on_message = self.on_message
		
	def connect(self):
		self.client.connect(self.MQTT_SERVER, 1883, 60)
		self.client.loop_forever()

	def on_connect(self, client, userdata, flags, rc):
		print("Connected with result code " + str(rc) + "- client : "+str(userdata))
		client.subscribe(self.MQTT_PATH_TEMP)
		
	def on_message(self, client, userdata, msg):
		if msg.topic == "test_PI_temp":
			self.handle_temp_data(msg.payload)
		else:
			print("Topic : "+msg.topic+ " ; Payload : "+str(msg.payload) )
			
	def handle_temp_data(self, payload):
		temp = json.loads(payload)
		print("Temperature")
		print("\tSensor: " + str(temp["sensor"]))
		print("\tCPU: " + str(temp["cpu"]))
		print("\tRoom: " + str(temp["room"]))
		print("\tTimestamp: " + str(temp["timestamp"]))
		print("------------------------------")
		
data_handler = SensorDataHandler()
data_handler.connect()
