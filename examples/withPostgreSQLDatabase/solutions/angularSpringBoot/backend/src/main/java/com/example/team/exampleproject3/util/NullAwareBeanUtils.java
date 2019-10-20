package com.example.team.exampleproject3.util;

import java.lang.reflect.InvocationTargetException;

import org.apache.commons.beanutils.BeanUtilsBean;

/**
 * Beans Utils aware of null values.
 * 
 */
public class NullAwareBeanUtils extends BeanUtilsBean {
	
	/**
	 * Singleton.
	 */
	private static final NullAwareBeanUtils INSTANCE = new NullAwareBeanUtils();
	
	/**
	 * Private constructor.
	 */
	private NullAwareBeanUtils() { }
	
	/**
	 * Gets the unique instance of the class.
	 * 
	 * @return Unique isntance.
	 */
	public static NullAwareBeanUtils getInstance() {
		return INSTANCE;
	}
	
	/**
	 * (non-Javadoc)
	 * @see org.apache.commons.beanutils.BeanUtilsBean#copyProperty(java.lang.Object, java.lang.String, java.lang.Object)
	 */
	@Override
	public void copyProperty(Object dest, String name, Object value) throws IllegalAccessException, InvocationTargetException {
		if(value == null) return;
		
		super.copyProperty(dest, name, value);
	}
}