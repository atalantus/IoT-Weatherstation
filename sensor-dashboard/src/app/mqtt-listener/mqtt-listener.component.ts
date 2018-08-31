import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Paho} from 'ng2-mqtt/mqttws31';

@Component({
  selector: 'app-mqtt-listener',
  templateUrl: './mqtt-listener.component.html',
  styleUrls: ['./mqtt-listener.component.scss']
})
export class MqttListenerComponent implements OnInit {
  client;
  mqtt_server = 'broker.hivemq.com';
  mqtt_topic = 'atalantus/IoT-Weatherstation';
  /**
   * Client ID
   */
  id = 'sensor_dashboard';
  /**
   * Current connection status
   */
  connection = 'not_connected';
  /**
   * Temperature-Data-Received Event
   */
  @Output() temp_data_received = new EventEmitter<string>();

  constructor() {
    this.client = new Paho.MQTT.Client(this.mqtt_server, 8000, this.id);

    this.onMessage();
    this.onConnectionLost();
    this.connect();
  }

  ngOnInit() {
  }


  /**
   * Connect to the server.
   */
  connect() {
    if (this.connection !== 'not_connected') { return; }
    this.connection = 'connecting';
    this.client.connect({onSuccess: this.onConnected.bind(this)});
  }

  /**
   * Handler when successfully connected to server.
   */
  onConnected() {
    this.connection = 'connected';
    this.client.subscribe(this.mqtt_topic);
  }

  /**
   * Sends a message to the server.
   * @param message - message to send
   */
  sendMessage(message: string) {
    const packet = new Paho.MQTT.Message(message);
    packet.destinationName = this.mqtt_topic;
    this.client.send(packet);
  }

  /**
   * Handler when message received.
   */
  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      this.temp_data_received.emit(message.payloadString);
    };
  }

  /**
   * Handler when connection lost.
   */
  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
      this.connection = 'not_connected';
      console.error('Connection lost : ' + JSON.stringify(responseObject));
    };
  }
}
