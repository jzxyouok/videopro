/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : yii2basic

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-04-09 22:48:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for navbar
-- ----------------------------
DROP TABLE IF EXISTS `navbar`;
CREATE TABLE `navbar` (
  `nav_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nav_text` varchar(20) NOT NULL,
  `nav_url` varchar(50) NOT NULL,
  `nav_order` int(11) DEFAULT NULL COMMENT 'order',
  `nav_pid` int(11) DEFAULT '0' COMMENT 'parent ID',
  PRIMARY KEY (`nav_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
