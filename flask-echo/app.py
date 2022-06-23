# -*- coding: utf-8 -*-
import os
import sys
from argparse import ArgumentParser
import json
from flask import Flask, request, abort
from asyncio import futures
from datetime import datetime as date
from requests.exceptions import HTTPError
import time
import base64
import json
from email.mime import image
from requests_toolbelt.multipart.encoder import MultipartEncoder
import requests
import re,random
import datetime
import urllib.request
from wordpress_xmlrpc import WordPressPage
from wordpress_xmlrpc.methods.posts import GetPosts, NewPost ,EditPost
from wordpress_xmlrpc.methods.media import UploadFile
from wordpress_xmlrpc.methods.users import GetUserInfo
from wordpress_xmlrpc import Client, WordPressPost , WordPressComment
from wordpress_xmlrpc.compat import xmlrpc_client
from wordpress_xmlrpc.methods import media, posts  ,comments
from wordpress_xmlrpc import WordPressTerm
from wordpress_xmlrpc.methods import taxonomies
#import mimetypes
#from fetch import Fetch
from googletrans import Translator
import os
import requests
from bs4 import BeautifulSoup


now = datetime.datetime.now()
user = "admin"
password = "Takumi@2533"
url = "https://avfreex24.com/wp-json/wp/v2"
data_string = user + ':' + password
token = base64.b64encode(data_string.encode())
headers = {'Authorization': 'Basic ' + token.decode('utf-8')}

from random_user_agent.user_agent import UserAgent
from random_user_agent.params import SoftwareName, OperatingSystem

class UserAgents:
    def __init__(self):
        pass

    def get_user_agent(self, driver):
        return driver.execute_script("return navigator.userAgent")

    def change_user_agent(self, driver):
        driver.execute_cdp_cmd('Network.setUserAgentOverride', {"userAgent":"python 3.10", "platform":"Windows"})

    def random_user_agent(self):
        software_names = [SoftwareName.CHROME.value]
        operating_systems = [OperatingSystem.WINDOWS.value]
        user_agent_rotator = UserAgent(software_names=software_names, operating_systems=operating_systems, limit=100)
        user_agent = user_agent_rotator.get_random_user_agent()
        return user_agent

useragents = UserAgents()
user_agent = useragents.random_user_agent()

app = Flask(__name__)


class POSTWP:
    def xmjsup(vod_id, namefile, urlFileimg):
        from urllib import request
        wp_url = "https://javhubpremium.com/changyedfilm.php"
        wp_username = "admin"
        wp_password = "Takumi@2533"
        client = Client(wp_url, wp_username, wp_password)
        nameImg = str(vod_id)+"-"+namefile.replace(" ", "")[0:25]
        print(nameImg)
        header = {
            "User-Agent": user_agent,
            "Referer": "https://google.com/"
        }
        try:
            req = request.Request(urlFileimg, headers=header)
            data = request.urlopen(req).read()
            with open('temp/'+nameImg+'.jpg', 'wb') as f:
                f.write(data)
                f.flush()
                f.close()
            print("download imgVID finished %s " % ('temp/'+nameImg+'.jpg'))
            #nameImg = str(vod_id)+"-"+namefile.replace(" ", "")[0:25]
            filename = './temp/'+nameImg+'.jpg'
            data = {
                'name': nameImg+'.jpg',
                'type': 'image/jpg',  # mimetype
            }

            # read the binary file and let the XMLRPC library encode it into base64
            with open(filename, 'rb') as img:
                data['bits'] = xmlrpc_client.Binary(img.read())
            response = client.call(media.UploadFile(data))
            attachment_id = response['id']
            print(attachment_id)
            return attachment_id
        except Exception as e:
            print(str(e))

    def VIDEOPOST(vod_id,vod_title,type_name,AVmessage,vod_pic,vpath):
        #ggtext = genTEXT()
        description = '<h2>javhubpremium นำเสนอ คลิปหลุดเอเชีย <b style="color:#FF69B4">'+ vod_title+'</b></h2><p>'+AVmessage+'</p>\n'
        meta_title = vod_title + " " + "หนังAV มีรหัส" + " " + type_name
        ppid = str(vod_id)
        #IDPOSTim = upImgVID("หนังAV",ppid,vod_pic)
        IDPOSTim = POSTWP.xmjsup("หนังAV มีรหัส",ppid, vod_pic)
        #vid_post = '[fvplayer src="'+vpath+'" ]'
        print(vod_title,"OK")
        POSTWP.mainPostVIDEO(vod_id,description,meta_title,vod_title,IDPOSTim,vpath)

    def mainPostVIDEO(vod_id,description,meta_title,vod_title,IDPOSTim,vpath):
        wp_url = "https://javhubpremium.com/changyedfilm.php"
        wp_username = "admin"
        wp_password = "Takumi@2533"
    
        wp = Client(wp_url, wp_username, wp_password)
        post = WordPressPost()
        post.slug = vod_title[:21] +"-"+str(vod_id)
        post.title = vod_title[:40]
        post.content = meta_title +'<br/>'+ description
        post.post_status = 'publish'
        post.thumbnail = IDPOSTim
        post.Large = IDPOSTim
        post.excerpt = meta_title
        muviquality = ["AVHD", "HDAV", "คลิปAV", "คลิปAVหลุด", "หลุดAV", "เสียงAV", "เขี่ยหีAV", "AVเซ็กซี่","นักแสดงAV",
                       "AVเบ็ดน้ำแตก", "AVเย็ดมัน", "คลิปหลุดเอเชีย","แอบถ่ายเอเชีย","AVเย็ดสด","หนังAVเต็มเรื่อง", "AVเล่นเสียว", "AVแตกปาก", "AVแตกใน", "โชว์นมAV", "AVโดนรุม", "AVน้อง", "AVโอนลี่แฟน"]
        post.terms_names = {
            'post_tag': [random.choice(muviquality), random.choice(muviquality)],
            'category': [random.choice(muviquality)],
        }
        post.custom_fields = []
        post.custom_fields.append({
            'key': 'vm_video_url',
            'value': vpath,
        })
        wp.call(NewPost(post))

@app.route("/callback", methods=['POST'])
def callback():
    #body = request.get_data()
    body = json.loads(request.get_data(as_text=True))
   
    #app.logger.info("Request body: " + body)
    vod_pic = body["imageZ"]
    vpath = body["m3u8"]
    vod_title = body["title"]
    type_name = body["cat"]
    AVmessage = body["AVmessage"]
    vod_id = body["vod_ID"]
    try:
        print(body["imageZ"])
        POSTWP.VIDEOPOST(vod_id,vod_title,type_name,AVmessage,vod_pic.replace("http://", "https://"),vpath.replace("http://", "https://"))
    except:
        abort(400)

    

if __name__ == "__main__":
    arg_parser = ArgumentParser(
        usage='Usage: python ' + __file__ + ' [--port <port>] [--help]'
    )
    arg_parser.add_argument('-p', '--port', type=int, default=9000, help='port')
    arg_parser.add_argument('-d', '--debug', default=False, help='debug')
    options = arg_parser.parse_args()

    app.run(debug=True, port=options.port)
